var express = require("express");
var router = express.Router();

import Words from "../../../model/schema/words";

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});
router.post("/addword", (req, res, next) => {
    try {
        let words = new Words({
            word: req.body.word,
            meaning: req.body.meaning,
            createdDate: req.body.createdDate,
            done: req.body.done
        });
        words
            .save()
            .then(res.json({ words }))
            .catch(e => {
                e;
            });
    } catch (e) {
        next(e);
    }
});
router.get("/getwords", (req, res, next) => {
    Words.find({ done: false }, function(err, words) {
        if (err) {
            throw err;
        }
        res.json({ words });
    });
});

module.exports = router;
