import React from "react";

export const CounterButtons = ({ count, setCount }) => {
    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };
    return (
        <div className="controls">
            <button className="button" onClick={incrementCount}>
                +
            </button>
            <button className="button" disabled={count <= 0} onClick={decrementCount}>
                -
            </button>
        </div>
    );
};
