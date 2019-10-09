import React, {Component} from "react";
import {Card, CardGroup, Table} from "react-bootstrap";

class Comparison extends Component {
    difference(ask, bid) {
        ask = parseFloat(ask);
        bid = parseFloat(bid);
        return  (bid-ask).toFixed(8);
        //return +(Math.round((bid-ask) + "e+2")  + "e-2");
    }
    render() {
        return (
            <div className="col-sm-10 offset-sm-1 mt-5">

                <h1 className="text-center mb-3">{this.props.coinName} - {this.props.currencyName}</h1>

                {this.props.coinData.map((coin) => (
                    <div key="0">
                        <div className="cards">
                            <Card>
                                <Card.Header><a href="https://www.bitfinex.com/" rel="noopener noreferrer"><Card.Img variant="top" src="/images/bitfinex-logo.png" className="p-1"/></a></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>Price: </b> {coin.bitfinex.price}</Card.Title>
                                    <Card.Text>
                                        <b>Ask: </b> {coin.bitfinex.ask} <br/>
                                        <b>Bid: </b> {coin.bitfinex.bid}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                            <Card.Header><a href="https://www.bitstamp.net/" rel="noopener noreferrer"><Card.Img variant="top" src="/images/bitstamp-logo.png" className="p-1"/></a></Card.Header>
                            <Card.Body>
                                <Card.Title><b>Price: </b> {coin.bitstamp.price}</Card.Title>
                                <Card.Text>
                                    <b>Ask: </b> {coin.bitstamp.ask} <br/>
                                    <b>Bid: </b> {coin.bitstamp.bid}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                            <Card>
                                <Card.Header><a href="https://www.kraken.com/" rel="noopener noreferrer"><Card.Img variant="top" src="/images/kraken-logo.png" className="p-1"/></a></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>Price: </b> {coin.kraken.price}</Card.Title>
                                    <Card.Text>
                                        <b>Ask: </b> {coin.kraken.ask} <br/>
                                        <b>Bid: </b> {coin.kraken.bid}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                               <Card.Header> <a href="https://www.bittrex.com/" rel="noopener noreferrer"><Card.Img variant="top" src="/images/bittrex-logo.png" className="p-1"/></a></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>Price: </b> {coin.bittrex.price}</Card.Title>
                                    <Card.Text>
                                        <b>Ask: </b> {coin.bittrex.ask} <br/>
                                        <b>Bid: </b> {coin.bittrex.bid}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header><a href="https://www.coinbase.com/" rel="noopener noreferrer"><Card.Img variant="top" src="/images/coinbase-logo.png" className="p-1"/></a></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>Price: </b> {coin.coinbase.price}</Card.Title>
                                    <Card.Text>
                                        <b>Ask: </b> {coin.coinbase.ask} <br/>
                                        <b>Bid: </b> {coin.coinbase.bid}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <br/><h3 className="text-center mt-3">ASK - BID Difference</h3><br/>
                        <Table bordered size="sm" className={"text-center table-hover-cells"}>
                            <thead>
                                <tr>
                                    <th><span className="table-corner-title">Ask \ Bid</span></th>
                                    <th><span className="table-title">Bitfinex</span><br/>{coin.bitfinex.bid}</th>
                                    <th><span className="table-title">Bitstamp</span><br/>{coin.bitstamp.bid}</th>
                                    <th><span className="table-title">Kraken</span><br/>{coin.kraken.bid}</th>
                                    <th><span className="table-title">Bittrex</span><br/>{coin.bittrex.bid}</th>
                                    <th><span className="table-title">Coinbase</span><br/>{coin.coinbase.bid}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><span className="table-title">Bitfinex</span><br/>{coin.bitfinex.ask}</th>
                                    <td className={"align-middle"}>{this.difference(coin.bitfinex.ask, coin.bitfinex.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bitfinex.ask, coin.bitstamp.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bitfinex.ask, coin.kraken.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bitfinex.ask, coin.bittrex.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bitfinex.ask, coin.coinbase.bid)}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="table-title">Bitstamp</span><br/>{coin.bitstamp.ask}</th>
                                    <td className={"align-middle"}>{this.difference(coin.bitstamp.ask, coin.bitfinex.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bitstamp.ask, coin.bitstamp.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bitstamp.ask, coin.kraken.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bitstamp.ask, coin.bittrex.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bitstamp.ask, coin.coinbase.bid)}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="table-title">Kraken</span><br/>{coin.kraken.ask}</th>
                                    <td className={"align-middle"}>{this.difference(coin.kraken.ask, coin.bitfinex.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.kraken.ask, coin.bitstamp.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.kraken.ask, coin.kraken.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.kraken.ask, coin.bittrex.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.kraken.ask, coin.coinbase.bid)}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="table-title">Bittrex</span><br/>{coin.bittrex.ask}</th>
                                    <td className={"align-middle"}>{this.difference(coin.bittrex.ask, coin.bitfinex.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bittrex.ask, coin.bitstamp.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bittrex.ask, coin.kraken.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bittrex.ask, coin.bittrex.bid)}</td>
                                    <td className={"align-middle"}>{this.difference(coin.bittrex.ask, coin.coinbase.bid)}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><span className="table-title">Coinbase</span><br/>{coin.coinbase.ask}</th>
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
                <hr/>
                <p><strong>Raw data:</strong> {JSON.stringify(this.props.coinData)}</p>
            </div>
        );
    }
}

export default Comparison;