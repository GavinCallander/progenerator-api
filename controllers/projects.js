const db = require('../models');
const router = require('express').Router();

// create a new project
// this will be useful when adding the data from json to the database
router.post('/', (req, res) => {
    // some code here
});

// get all projects
router.get('/', (req, res) => {
    db.Project.find()
    .populate('resources')
    .populate('tech')
    .populate('types')
    .then(projects => res.send(projects))
    .catch(err => res.send(err));
});

module.exports = router;