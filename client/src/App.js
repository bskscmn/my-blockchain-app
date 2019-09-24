import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Comparison from "./components/Comparison";
import Filter from "./components/Filter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: 'BTC',
            currency: 'USD',
            coinData: [],
            time: Date.now()
        };

    }

    handleCoinChange = (event) => {
        this.setState({ coin: event.target.value },()=>{this.callAPI()});
    }

    handleCurrencyChange = (event) => {
        this.setState({ currency: event.target.value },()=>{this.callAPI()});
    }

     callAPI() {
         var coin = this.state.coin;
         var currency = this.state.currency;
        var url = `/api/compare/${coin}/${currency}/`;
         fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ coinData: data })
            })
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        //this.timer = setInterval(()=> this.callAPI(), 60000);
    }

    render() {
        return (
            <div className = "App">
                <Header />
                <div className="row">
                    <Filter
                        coin={this.state.coin}
                        currency={this.state.currency}
                        handleCoinChange={this.handleCoinChange}
                        handleCurrencyChange={this.handleCurrencyChange}/>
                    <Comparison coinData={this.state.coinData} coinName={this.state.coin} currencyName={this.state.currency}/>
                </div>
            </div>
        );
    }
}

export default App;
