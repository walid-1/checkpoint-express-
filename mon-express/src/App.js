const express = require("express");
const app = express();
const path = require("path");

const currentDate = new Date();
const day = currentDate.getDay();
const hours = currentDate.getHours();

app.use((req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
    next();
  } else {
    res.sendFile(path.join(__dirname, "public", "serverClose.html"));
  }
});

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "style.css"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});
app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ourServices.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contactUs.html"));
});

app.listen(3000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("server is running..");
  }
});
