const db = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    db.Resource.find()
    .populate({
        path: 'projects',
        populate: {
            path: 'resources tech type'
        }
    })
    .then(resource => res.send(resource))
    .catch(err => res.send(err))
});

module.exports = router;