
const path = require("path")
const auth_middleware = (req, res, next) => {
    
    switch (req.query.id) {
        case "ben_dev":
            console.log("ben authed")
            next()
            break
        case "sameek_dev":
            console.log("sameek authed")
            next()
            break
        case undefined:
            res.sendFile(path.join(__dirname, "/access_denied.html"))
            console.log("user denied access")
            break

    }
}


module.exports = auth_middleware
