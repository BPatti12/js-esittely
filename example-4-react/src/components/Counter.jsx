import React, { useState } from "react";
import { CounterButtons } from "./CounterButton";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div class="main">
                <div class="counter">
                    <h1 id="count">{count}</h1>
                </div>
                <CounterButtons count={count} setCount={setCount}/>
            </div>
        </div>
    );
};
