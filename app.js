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

app.get('/api/compare/:coin/:currency', (req,res) => {

        let btc = [
            {
                bitfinex: {
                    price: 0,
                    bid: 0,
                    ask: 0
                },
                bitstamp: {
                    price: 0,
                    bid: 0,
                    ask: 0
                },
                kraken: {

                    price: 0,
                    bid: 0,
                    ask: 0
                },
                bittrex: {
                    price: 0,
                    bid: 0,
                    ask: 0
                },
                coinbase: {
                    price: 0,
                    bid: 0,
                    ask: 0
                }
            }
        ];

        return res.status(200).json(btc);
    }
);

module.exports = app;


