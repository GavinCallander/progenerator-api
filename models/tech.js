const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is a required field"]
    },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
});

module.exports = mongoose.model('Tech', techSchema);