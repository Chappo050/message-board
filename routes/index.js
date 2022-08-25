var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Sai",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Matthew",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { createTitle: "Make a new message!" });
});

module.exports = router;
