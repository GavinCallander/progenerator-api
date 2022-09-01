const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports.Project = require('./project');
module.exports.Resource = require('./resource');
module.exports.Tech = require('./tech');
module.exports.Type = require('./type');