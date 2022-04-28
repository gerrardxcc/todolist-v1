const express = require("express");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", (req, res) => {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

app.post("/", (req, res) => {
  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");

});

app.get("/work", (req, res)=>{
  res.render("list",{listTitle:"Work List", newListItems: workItems});
});

app.post("/work", (req, res)=>{
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
})
