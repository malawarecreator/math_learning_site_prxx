
const express = require("express")
const path = require("path")

const app = express();
let visitorcount = 0
app.get("/", (req, res, next) => {
    res.cookie("visitornum", `${visitorcount}`)
    console.log("cookie set for user " + visitorcount)
    
    next()
    
}, (req, res) => {
    res.sendFile(path.join(__dirname, "/home.html"))
}
);
app.get("/aboutme",(req, res, next) => {
    res.cookie("visitornum", `${visitorcount}`)
    console.log(`cookie set for user ${visitorcount}`)
    
    next()
} ,(req, res) => {
    res.sendFile(path.join(__dirname, "/aboutme.html"))
})

app.listen(process.env.PORT || 8080, () => {
    console.log("server started")
});

