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
                <form onClick={(event) => {event.preventDefault() 
                    this.props.exchangeRate(this.state.term)}}>
                    <input type='number' name='exchange_rate' value={this.state.term} onChange={this.onInputChange} />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default ExchangeRateCmp;