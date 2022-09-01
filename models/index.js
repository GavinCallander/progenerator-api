require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports.Project = require('./project');
module.exports.Resource = require('./resource');
module.exports.Tech = require('./tech');
module.exports.Type = require('./type');