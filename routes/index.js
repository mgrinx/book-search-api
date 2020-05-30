const db = require("../models");

module.exports = app => {
    app.get("/", (req, res) => {
        db.Book
            .find({})
            .then(data => res.json(data))
            .catch(err => console.log(err));
    });

    app.post("/", (req, res) => {
        db.Book
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => console.log(err));
    });
}