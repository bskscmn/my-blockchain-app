import React, {Component} from "react";
import {Table} from "react-bootstrap";

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

                        <Table id="table1" bordered size="sm" className={"text-center table-hover-cells"}>
                                <thead>
                                <tr className={"table-hover-cells"}>
                                    <th><span className="table1-header"><a href="https://www.bitfinex.com/" rel="noopener noreferrer"><img variant="top" src="/images/bitfinex-icon.png" className="p-1"/>Bitfinex</a></span><br/></th>
                                    <th><span className="table1-header"><a href="https://www.bitstamp.net/" rel="noopener noreferrer"><img variant="top" src="/images/bitstamp-icon.png" className="p-1"/>Bitstamp</a></span><br/></th>
                                    <th><span className="table1-header"><a href="https://www.kraken.com/" rel="noopener noreferrer"><img variant="top" src="/images/kraken-icon.png" className="p-1"/>Kraken</a></span><br/></th>
                                    <th><span className="table1-header"><a href="https://www.bittrex.com/" rel="noopener noreferrer"><img variant="top" src="/images/bittrex-icon.png" className="p-1"/>Bittrex</a></span></th>
                                    <th><span className="table1-header"><a href="https://www.coinbase.com/" rel="noopener noreferrer"><img variant="top" src="/images/coinbase-icon.png" className="p-1"/>Coinbase</a></span></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={"align-middle"}>
                                        <b>Price: </b> {coin.bitfinex.price} <br/>
                                        <b>Ask: </b> {coin.bitfinex.ask} <br/>
                                        <b>Bid: </b> {coin.bitfinex.bid} <br/>
                                    </td>
                                    <td className={"align-middle"}>
                                        <b>Price: </b> {coin.bitstamp.price} <br/>
                                        <b>Ask: </b> {coin.bitstamp.ask} <br/>
                                        <b>Bid: </b> {coin.bitstamp.bid} <br/>
                                    </td>
                                    <td className={"align-middle"}>
                                        <b>Price: </b> {coin.kraken.price} <br/>
                                        <b>Ask: </b> {coin.kraken.ask} <br/>
                                        <b>Bid: </b> {coin.kraken.bid} <br/>
                                    </td>
                                    <td className={"align-middle"}>
                                        <b>Price: </b> {coin.bittrex.price} <br/>
                                        <b>Ask: </b> {coin.bittrex.ask} <br/>
                                        <b>Bid: </b> {coin.bittrex.bid} <br/>
                                    </td>
                                    <td className={"align-middle"}>
                                        <b>Price: </b> {coin.coinbase.price} <br/>
                                        <b>Ask: </b> {coin.coinbase.ask} <br/>
                                        <b>Bid: </b> {coin.coinbase.bid} <br/>
                                    </td>
                                </tr>

                                </tbody>
                            </Table>

                        <br/><h3 className="text-center mt-3">ASK - BID Difference</h3><br/>
                        <Table id="table2" bordered size="sm" className={"text-center"}>
                            <thead className={"table-hover-cells"}>
                                <tr>
                                    <th><span className="table-corner-title">Ask \ Bid</span></th>
                                    <th><span className="table-title">Bitfinex</span><br/>{coin.bitfinex.bid}</th>
                                    <th><span className="table-title">Bitstamp</span><br/>{coin.bitstamp.bid}</th>
                                    <th><span className="table-title">Kraken</span><br/>{coin.kraken.bid}</th>
                                    <th><span className="table-title">Bittrex</span><br/>{coin.bittrex.bid}</th>
                                    <th><span className="table-title">Coinbase</span><br/>{coin.coinbase.bid}</th>
                                </tr>
                            </thead>
                            <tbody className={"table-hover-cells"}>
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