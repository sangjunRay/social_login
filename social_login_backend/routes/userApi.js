const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/users", (req, res) => {
    db.social.findAll().then(socialusers => res.send(socialusers))
})

router.get("/user/:id", (req, res) => {
    db.social.findAll({where: {id: req.params.id}}).then(user => res.send(user))
})


router.post("/register", (req, res) => {
    console.log(req.body)
    db.social.create({
        name: req.body.name,
        email: req.body.email,
    }).then(submitUser => res.send(submitUser))
})

module.exports = router;