const express = require("express");
const morgan = require("morgan");
const app = express();


const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(morgan("common"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));




app.get("/", (req, res) => {
    res.render("calc");
});


app.listen(port, host, () => {
  console.log(`Listening to port ${port} of ${host}!`);
});

