const db = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    db.Tech.find()
    .populate('projects')
    .then(techs => res.send(techs))
    .catch(err => res.send(err));
});

module.exports = router;