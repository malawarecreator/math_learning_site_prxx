
const express = require("express")
const path = require("path")

const app = express();

app.get("/", (req, res) => {
    //send html file
    res.sendFile(path.join(__dirname, "/home.html"))
    
});
app.get("/aboutme", (req, res) => {
    res.sendFile(path.join(__dirname, "/aboutme.html"))
})

app.listen(process.env.PORT || 8080, () => {
    console.log("server started")
});

