import React from 'react';

const Counter = () => {
    return (
        <div>
            <form>
                <input type='text' name='name' placeholder='Transaction Name' />
                <button>+</button>
                <input type='number' name='euro' placeholder='Euro' />
                <button>-</button>
                <input type='number' name ='pln' placeholder='PLN' />
                <button>Remove transaction</button>
            </form>            
        </div>
    );
};

export default Counter;