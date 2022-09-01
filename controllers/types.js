const db = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    db.Type.find()
    .populate('projects')
    .then(types => res.send(types))
    .catch(err => res.send(err));
});

module.exports = router;