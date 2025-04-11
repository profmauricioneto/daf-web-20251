import React from 'react';
import useCounter from './counterStore';

const CounterButton = () => {
    const count = useCounter((state) => state.count);
    const decrement = useCounter((state) => state.decrement);
    const increment = useCounter((state) => state.increment);

    return (
        <div>
            <h2>Contador: {count}</h2>
            <button
                onClick={() => decrement()}
            >Decrementar</button>
            <button
                onClick={() => increment()}
            >Incrementar</button>
        </div>
    );
};

export default CounterButton;