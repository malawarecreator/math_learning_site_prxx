const axios = require("axios")
const express = require("express")
const path = require("path")

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
});

app.listen(process.env.PORT || 8080, () => {
    console.log("server started")
});

