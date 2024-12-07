
const express = require("express")
const path = require("path")

const app = express();

app.get("/", (req, res, next) => {


    switch (req.query.id) {
        case "ben_dev":
            console.log("ben authed")
            next()
            break
        case "sameek_dev":
            console.log("tim authed")
            next()
            break
        case undefined:
            res.sendFile(path.join(__dirname, "/access_denied.html"))
            console.log("user denied access")
            break

    }
    
}, (req, res) => {
    res.sendFile(path.join(__dirname, "/home.html"))
}
);
app.get("/aboutme",(req, res, next) => {
    switch (req.query.id) {
        case "ben_dev":
            console.log("ben authed")
            next()
            break
        case "sameek_dev":
            console.log("tim authed")
            next()
            break
        default:
            res.sendFile(path.join(__dirname, "/access_denied.html"))
            console.log("user denied access")
            break

    }
    

} ,(req, res) => {
    res.sendFile(path.join(__dirname, "/aboutme.html"))
})

app.listen(process.env.PORT || 8080, () => {
    console.log("server started")
});

