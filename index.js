const path = require("path");
const hbs = require("hbs");

const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "./public");

const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

// console.log(staticPath);

app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//   res.json({ email: "javed", password: "12345" });
// });

app.set("view engine", "hbs");

app.set("views", templatePath);

hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index", {
    OnEar: "On Ear",
    name: req.query.name ? req.query.name : "Coffee",
  });
});

app.get("/about", (req, res) => {
  console.log(req.query);
  res.render("about");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("*", (req, res) => {
  res.status(404).render("404", { errorcommit: "Oops Page Not Found!" });
});

app.listen(100, () => console.log("server is listening... in port number 100"));
