const db = require('../models');
const router = require('express').Router();

// create a new project
// this will be useful when adding the data from json to the database
router.post('/', (req, res) => {
    // data is split into string and ref
    console.log("Hit the route")
    // findOrCreate - error if find
    db.Project.findOne()
    .then(project => {
        console.log("In the then")
        if (project) {
            console.log("In the project");
            return res.status(409).send({ message: "A project, wuuut?"});
        }
        else {
            console.log("In the not project");
            return res.send("No project exists");
        }
    })

    // loop through data being passed for each variable

            // findOrCreate for each in their respective dbs

    // once done, send confirmation

});

// get all projects
router.get('/', (req, res) => {
    db.Project.find()
    .populate('resources')
    .populate('tech')
    .populate('types')
    .then(projects => res.send(projects))
    .catch(err => res.send(err))
});

module.exports = router;