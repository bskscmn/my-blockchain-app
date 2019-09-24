import React, {Component} from "react";
import {Card, CardGroup, Table} from "react-bootstrap";

class Comparison extends Component {
     roundToTwo(num) {
         num = parseFloat(num);
         return +(Math.round(num + "e+2")  + "e-2");
    }
    difference(ask, bid) {
        ask = parseFloat(ask);
        bid = parseFloat(bid);
        
        return +(Math.round((bid-ask) + "e+2")  + "e-2");
    }
    render() {
        return (
            <div className="col-sm-10 offset-sm-1 mt-5">

                <h1 className="text-center mb-3">{this.props.coinName} - {this.props.currencyName}</h1>
                {JSON.stringify(this.props.coinData)}
                {this.props.coinData.map((coin) => (
                    <div key="0">
                    <CardGroup>
                        <Card>
                            <a href="https://www.bitfinex.com/" rel="noopener noreferrer"><Card.Header><Card.Img variant="top" src="/images/bitfinex-logo.png" className="p-1"/></Card.Header></a>
                            <Card.Body>
                                <Card.Title><b>Price: </b> {this.roundToTwo(coin.bitfinex.price)}</Card.Title>
                                <Card.Text>
                                    <b>Ask: </b> {this.roundToTwo(coin.bitfinex.ask)} <br/>
                                    <b>Bid: </b> {this.roundToTwo(coin.bitfinex.bid)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <a href="https://www.bitstamp.net/" rel="noopener noreferrer"><Card.Header><Card.Img variant="top" src="/images/bitstamp-logo.png" className="p-1"/></Card.Header></a>
                            <Card.Body>
                                <Card.Title><b>Price: </b> {this.roundToTwo(coin.bitstamp.price)}</Card.Title>
                                <Card.Text>
                                    <b>Ask: </b> {this.roundToTwo(coin.bitstamp.ask)} <br/>
                                    <b>Bid: </b> {this.roundToTwo(coin.bitstamp.bid)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <a href="https://www.kraken.com/" rel="noopener noreferrer"><Card.Header><Card.Img variant="top" src="/images/kraken-logo.png" className="p-1"/></Card.Header></a>
                            <Card.Body>
                                <Card.Title><b>Price: </b> {this.roundToTwo(coin.kraken.price)}</Card.Title>
                                <Card.Text>
                                    <b>Ask: </b> {this.roundToTwo(coin.kraken.ask)} <br/>
                                    <b>Bid: </b> {this.roundToTwo(coin.kraken.bid)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <a href="https://www.bittrex.com/" rel="noopener noreferrer"><Card.Header><Card.Img variant="top" src="/images/bittrex-logo.png" className="p-1"/></Card.Header></a>
                            <Card.Body>
                                <Card.Title><b>Price: </b> {this.roundToTwo(coin.bittrex.price)}</Card.Title>
                                <Card.Text>
                                    <b>Ask: </b> {this.roundToTwo(coin.bittrex.ask)} <br/>
                                    <b>Bid: </b> {this.roundToTwo(coin.bittrex.bid)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <a href="https://www.coinbase.com/" rel="noopener noreferrer"><Card.Header><Card.Img variant="top" src="/images/coinbase-logo.png" className="p-1"/></Card.Header></a>
                            <Card.Body>
                                <Card.Title><b>Price: </b> {this.roundToTwo(coin.coinbase.price)}</Card.Title>
                                <Card.Text>
                                    <b>Ask: </b> {this.roundToTwo(coin.coinbase.ask)} <br/>
                                    <b>Bid: </b> {this.roundToTwo(coin.coinbase.bid)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                        <br/><h3 className="text-center mt-3">ASK - BID Difference</h3><br/>
                    <Table bordered size="sm" className={"text-center table-hover-cells"}>
                    <thead>
                        <tr>
                            <th>Ask \ Bid</th>
                            <th>Bitfinex<br/>{this.roundToTwo(coin.bitfinex.bid)}</th>
                            <th>Bitstamp<br/>{this.roundToTwo(coin.bitstamp.bid)}</th>
                            <th>Kraken<br/>{this.roundToTwo(coin.kraken.bid)}</th>
                            <th>Bittrex<br/>{this.roundToTwo(coin.bittrex.bid)}</th>
                            <th>Coinbase<br/>{this.roundToTwo(coin.coinbase.bid)}</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Bitfinex<br/>{this.roundToTwo(coin.bitfinex.ask)}</th>
                        <td className={"align-middle"}>{this.difference(coin.bitfinex.ask, coin.bitfinex.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bitfinex.ask, coin.bitstamp.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bitfinex.ask, coin.kraken.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bitfinex.ask, coin.bittrex.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bitfinex.ask, coin.coinbase.bid)}</td>
                    </tr>
                    <tr>
                        <th>Bitstamp<br/>{this.roundToTwo(coin.bitstamp.ask)}</th>
                        <td className={"align-middle"}>{this.difference(coin.bitstamp.ask, coin.bitfinex.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bitstamp.ask, coin.bitstamp.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bitstamp.ask, coin.kraken.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bitstamp.ask, coin.bittrex.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bitstamp.ask, coin.coinbase.bid)}</td>
                    </tr>
                    <tr>
                        <th>Kraken<br/>{this.roundToTwo(coin.kraken.ask)}</th>
                        <td className={"align-middle"}>{this.difference(coin.kraken.ask, coin.bitfinex.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.kraken.ask, coin.bitstamp.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.kraken.ask, coin.kraken.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.kraken.ask, coin.bittrex.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.kraken.ask, coin.coinbase.bid)}</td>
                    </tr>
                    <tr>
                        <th>Bittrex<br/>{this.roundToTwo(coin.bittrex.ask)}</th>
                        <td className={"align-middle"}>{this.difference(coin.bittrex.ask, coin.bitfinex.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bittrex.ask, coin.bitstamp.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bittrex.ask, coin.kraken.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bittrex.ask, coin.bittrex.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.bittrex.ask, coin.coinbase.bid)}</td>
                    </tr>
                    <tr>
                        <th>Coinbase<br/>{this.roundToTwo(coin.coinbase.ask)}</th>
                        <td className={"align-middle"}>{this.difference(coin.coinbase.ask, coin.bitfinex.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.coinbase.ask, coin.bitstamp.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.coinbase.ask, coin.kraken.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.coinbase.ask, coin.bittrex.bid)}</td>
                        <td className={"align-middle"}>{this.difference(coin.coinbase.ask, coin.coinbase.bid)}</td>
                    </tr>
                    </tbody>
                    </Table>
                    </div>

                ))}
            </div>
        );
    }
}

export default Comparison;