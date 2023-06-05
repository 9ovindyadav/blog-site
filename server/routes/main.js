const express = require("express");
const router = express.Router();

router.route("/").get((req,res) => {
    const locals = {
        title: "Blog website",
        description: "Blog website made with Nodejs, Expressjs, MongoDB and Ejs"
    }
    res.render("index",{locals});
});

router.route("/about").get((req,res) => {
    res.render("about");
});

module.exports = router;