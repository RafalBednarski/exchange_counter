import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        euro: 0,
        transaction_name: '',
        transaction_visible: true
     }

    onEuroInputChange = (event) => {
        this.setState({
            euro: event.target.value //ustawiam state z number inputa
        })
    }

    onEuroInputNameChange = (event) => {
        this.setState({
            transaction_name: event.target.value
        })
    }

    // removeTransaction = (event) => {
    //     event.preventDefault()
    //     this.setState({
    //         transaction_visible: false
    //     })
    // }

    render() { 
        return ( 
            <div>{this.props.exchange_rate}{/*tu chwilowo odbieram stan z komponentu TRansactions*/}
            {this.state.transaction_visible ? <form>
                <input type='text' name='name' placeholder='Transaction Name' value={this.state.transaction_name} onChange={this.onEuroInputNameChange}/>

                <input type='number' name='euro' placeholder='Euro' value={this.state.euro} onChange={this.onEuroInputChange}/>

                <input type='number' name ='pln' placeholder='PLN'  value={!this.props.exchange_rate ? this.state.euro === 0 : this.state.euro * this.props.exchange_rate}/>{/*mnoże tutejszy state ze stanem przekazanym z propsami z komponentu Transactions*/}
                <button onClick={this.removeTRansaction}>Remove transaction</button>
            </form> : null}            
            </div>
         );
    }
}
 
export default Counter;