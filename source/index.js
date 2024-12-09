
const express = require("express")
const path = require("path")
const auth_middleware = require("./middleware")
const app = express();
app.use(auth_middleware)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/home.html"))
}
);
app.get("/aboutme", (req, res) => {
    res.sendFile(path.join(__dirname, "/aboutme.html"))
})

app.listen(process.env.PORT || 8080, () => {
    console.log("server started")
});


