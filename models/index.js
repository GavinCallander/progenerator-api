require('dotenv').config();
const mongoose = require('mongoose');

const uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ac-tfpi0p6-shard-00-00.s7qjpgo.mongodb.net:27017,ac-tfpi0p6-shard-00-01.s7qjpgo.mongodb.net:27017,ac-tfpi0p6-shard-00-02.s7qjpgo.mongodb.net:27017/?ssl=true&replicaSet=atlas-i65vnp-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports.Project = require('./project');
module.exports.Resource = require('./resource');
module.exports.Tech = require('./tech');
module.exports.Type = require('./type');