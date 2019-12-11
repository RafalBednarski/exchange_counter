import React, { Component } from 'react';

class ExchangeRateCmp extends Component {

    state = {
        term: 0
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onClick={(event) => {event.preventDefault() //wywołuje tu metode przesłaną z komponentu Transactions z tutejszym statem
                    this.props.exchangeRate(this.state.term)}}>
                    <h5>current PLN rate</h5>    
                    <input type='number' name='exchange_rate' value={this.state.term} onChange={this.onInputChange} />{/*Tutaj ustawiam tutejszy state*/}
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default ExchangeRateCmp;