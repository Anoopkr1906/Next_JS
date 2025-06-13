"use client";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter Page</h1>
            <p>Current Count: {count}</p>
            <button style={{cursor: 'pointer'}} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={{cursor: 'pointer'}} onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};