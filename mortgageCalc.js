const express = require("express");
const app = express();
const script = 

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("calc");
});


app.listen(2000, "localhost", () => {
  console.log("Listening to port 2000.");
});

