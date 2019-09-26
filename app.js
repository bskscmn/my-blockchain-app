const express = require('express');
var cors = require("cors");
const bodyParser = require('body-parser');

const compareRoutes = require('./routes/compare');

const app = express();
app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}
app.get('/api/compare/:coin/:currency', compareRoutes);


module.exports = app;


