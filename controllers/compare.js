const fetch = require('node-fetch');

exports.platformsData = (req, res, next) => {
    var coin = req.params.coin;
    var currency = req.params.currency;
    var krakencoin, bittrexcurrency;
    var bitstampcoin = coin.toLowerCase();
    var bitstampcurrency = currency.toLowerCase();
    if (coin === 'BTC') {krakencoin = 'XBT'}else{krakencoin = coin}
    if (currency === 'USD') {bittrexcurrency = 'USDT'}else{bittrexcurrency = currency}

   /* function getData(url)
    {
        return fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {

            if (response.status !== 200) {
                return null;
            } else {
                return response.json()
            }
        }).catch(error => console.error(error));

    }
    function getAllData(){
        return Promise.all([getData('https://api-pub.bitfinex.com/v2/ticker/t'+coin+currency), getData('https://www.bitstamp.net/api/v2/ticker/'+bitstampcoin+bitstampcurrency), getData('https://api.kraken.com/0/public/Ticker?pair='+krakencoin+currency), getData('https://api.bittrex.com/v3/markets/'+coin+'-'+bittrexcurrency+'/ticker'), getData('https://api.pro.coinbase.com/products/'+coin+'-'+currency+'/ticker')])
    }*/
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
    /*getAllData()
        .then(([bodyBF, bodyBS, bodyK, bodyBT, bodyCB]) => {

            if (bodyBF != null) {
                btc[0].bitfinex = {
                    price: bodyBF[6],
                    bid: bodyBF[0],
                    ask: bodyBF[2]
                }
            }
            if (bodyBS != null) {
                btc[0].bitstamp = {
                    price: bodyBS.last,
                    bid: bodyBS.bid,
                    ask: bodyBS.ask
                }
            }
            if (bodyK != null) {
                var bodyKcode = Object.keys(bodyK["result"])[0];
                btc[0].kraken = {
                    price: bodyK["result"][bodyKcode]["c"][0],
                    bid: bodyK["result"][bodyKcode]["b"][0],
                    ask: bodyK["result"][bodyKcode]["a"][0]
                }
            }
            if (bodyBT != null) {
                btc[0].bittrex = {
                    price: bodyBT.lastTradeRate,
                    bid: bodyBT.bidRate,
                    ask: bodyBT.askRate
                }
            }
            if (bodyCB != null) {
                btc[0].coinbase = {
                    price: bodyCB.price,
                    bid: bodyCB.bid,
                    ask: bodyCB.ask
                }
            }
            console.log(btc);

        });*/
    return res.status(200).json(btc);
};