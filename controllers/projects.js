const Project = require('../models/project');
const router = require('express').Router();

// test the route
router.post('/', (req, res) => {
    console.log("Hit the route");
    console.log(req.body);
    let project = new Project({
        name: req.body.name,
        description: req.body.description
    })
    console.log(project);
    project.save((err, project) => {
        console.log('saving, allegedly');
        if (err) {
            res.json({ type: 'error', message: 'error creating project'});
            console.log(err);
        }
        else {
            console.log('success');
            res.status(200).json({ type: 'success', project: project.toObject() })
        }
    })
});

// router.get('/', (req, res) => {
//     db.Project.find()
//     .populate('resources')
//     .populate('tech')
//     .populate('types')
//     .then(projects => res.send(projects))
//     .catch(err => res.send(err))
// });

module.exports = router;