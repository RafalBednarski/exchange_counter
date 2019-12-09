import React, { Component } from 'react';
import Counter from './Counter';
import ExchangeRateCmp from './ExchangeRateCmp';

class Transactions extends Component {

    state = {
        exchange_rate: 0
    }

    exchangeRate = (term, event) => {
        this.setState({
            exchange_rate: term
        })
        console.log(term)
       // event.preventDefault()
    }

    render() {
        return (
            <div>
                <ExchangeRateCmp exchangeRate={this.exchangeRate} />
                <Counter />
                <button>Add transaction</button><br />
                {/* <input type='number' name='sum' placeholder='Sum of Your transactions' />
                <input type='number' name='bigest_transaction' placeholder='Bigest transaction' /> */}
            </div>
        );
    }
}

export default Transactions;