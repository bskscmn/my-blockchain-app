import React, {Component} from "react";

class Filter extends Component {

    render() {
        return (
            <div className="col-sm-10 offset-sm-1 mt-5">
                <div className="form-inline">
                    <select className="custom-select" value={this.props.coin} onChange={this.props.handleCoinChange}>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="LTC">LTC</option>
                        <option value="ZEC">ZEC</option>
                        <option value="DASH">DASH</option>
                        <option value="XRP">XRP</option>
                        <option value="XMR">XMR</option>
                        <option value="BCH">BCH</option>
                        <option value="NEO">NEO</option>
                        <option value="ADA">ADA</option>
                        <option value="EOS">EOS</option>
                    </select>
                    <select className="custom-select" value={this.props.currency} onChange={this.props.handleCurrencyChange}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="TRY">TRY</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Filter;