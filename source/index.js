const express = require("express");
const path = require("path");
const { auth_middleware, setcookie } = require("./middleware");
const cookieParser = require("cookie-parser");
const { rmSync } = require("fs");

const app = express();

app.use(cookieParser()); // Correctly use cookie-parser middleware
app.use(auth_middleware); // Use auth_middleware after cookie-parser

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./html/home.html"));
});

app.get("/aboutme", (req, res) => {
    res.sendFile(path.join(__dirname, "./html/aboutme.html"));
});

app.get("/setcookie", setcookie, (req, res) => {
    res.redirect("/");
});

app.get("/clearcookie", (req, res) => {
    res.clearCookie("authed");
    res.send("cookie cleared");
});
app.listen(process.env.PORT || 8080, () => {
    console.log("server started");
});

