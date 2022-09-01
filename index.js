const express = require('express');

const app = express();

app.use('/api/projects', require('./controllers/projects'));

app.listen(3000, () => {
    console.log("Listening");
});