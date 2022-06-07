import { useState } from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const setIncrement = (number: number = 1) => {
        setCounter(counter + number);
    }

    return (
        <div className="mt-5">
            <h3>Counter:</h3>
            <span>value: {counter}</span>
            <br />
            <button
                onClick={ () => setIncrement() }
                className='btn btn-outline-primary mt-2'
            >
                +1
            </button>
            <button
                onClick={ () => setIncrement(2) }
                className='btn btn-outline-primary mt-2'
            >
                +2
            </button>
            <button
                onClick={ () => setCounter(0) }
                className='btn btn-outline-danger mt-2'
            >
                Reset
            </button>
        </div>
    )
}