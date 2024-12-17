const path = require("path");

const auth_middleware = (req, res, next) => {
    if (req.cookies.authed !== undefined && req.cookies.authed === "true") {
        return next();
    }
    
    switch (req.query.id) {
        case "ben_dev":
            console.log("ben authed");
            return next();
        case "neon_dev":
            console.log("sameek authed");
            return next();
        default:
            res.sendFile(path.join(__dirname, "./html/access_denied.html"));
            console.log("user denied access");
            return;
    }
};

const setcookie = (req, res, next) => {
    res.cookie("authed", "true", {maxAge: 172800000});
    next();
};

module.exports = { auth_middleware, setcookie };