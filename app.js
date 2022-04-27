const express = require("express");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });

});

app.post("/", (req, res) => {
  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");

});


app.listen(3000, () => {
  console.log("Server started on port 3000");
})
