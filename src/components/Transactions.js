import React, { Component } from 'react';
import Counter from './Counter';
import ExchangeRateCmp from './ExchangeRateCmp';

class Transactions extends Component {

    state = {
        exchange_rate: 0,
        add_new_transaction: 0
    }

    exchangeRate = (term, event) => { //wysyłam tą metode w propsach do komponentu ExchangeRateCmp
        this.setState({
            exchange_rate: term //state = state z komponentu ExchangeRateCmp i wysyłam go do komponentu Counter
        })
    }

    addNewTransaction = () => {
        this.setState({
            add_new_transaction: this.state.add_new_transaction + 1
        })
    }

    render() {
        const arrayOfCounters = [];

        for (var i = 0; i < this.state.add_new_transaction; i += 1) {//logika do dodawania kolejnych liczników
            arrayOfCounters.push(<Counter key={i} number={i} exchange_rate={this.state.exchange_rate} />);
        }

        return (
            <div>
                <ExchangeRateCmp exchangeRate={this.exchangeRate} />
                {/* <Counter exchange_rate={this.state.exchange_rate}/> */}
                {arrayOfCounters}
                <button onClick={this.addNewTransaction}>Add transaction</button>   
            </div>
        );
    }
}

export default Transactions;