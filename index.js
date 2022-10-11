const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/projects', require('./controllers/projects'));
app.use('/api/v1/resources', require('./controllers/resources'));
app.use('/api/v1/techs', require('./controllers/techs'));
app.use('/api/v1/types', require('./controllers/types'));

app.listen(3000, () => {
    console.log("Listening");
});