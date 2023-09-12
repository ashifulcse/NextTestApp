import { useEffect, useState } from "react";

export default function StaticCounter({dataCount, setDataCount}) { 
    const minValue = 0;

    const handleIncrementStatic = (staticIncrementValue) => {
        setDataCount(Math.min(dataCount + staticIncrementValue));
    };

    const handleDecrementStatic = (staticDecrementValue) => {
        setDataCount(Math.max(dataCount - staticDecrementValue, minValue));
    };

    return (
        <div className="my-4"> 
            <button onClick={() => handleIncrementStatic(1)}>Increment</button>
            <button onClick={() => handleDecrementStatic(1)}>Decrement</button>
        </div>
    )
}


