const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is a required field"]
    },
    description: {
        type: String,
        required: [true, "description is a required field"]
    },
    tech: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tech'
    },
    types: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
    },
    resources: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Resource'
        }
    ]
});

module.exports = mongoose.model('Project', projectSchema);