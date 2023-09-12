import { useEffect, useState } from "react";

export default function DynamicCounter({dataCount, setDataCount}) { 
    const [dynamicValue, setDynamicValue] = useState();

    const handleIncrementDynamic = () => {
        setDataCount(dataCount + dynamicValue);
    };

    const handleDecrementDynamic = () => {
        setDataCount(dataCount - dynamicValue);
    };

    const handleChange = (e) => {
        setDataCount(parseInt(e.target.value));
        setDynamicValue(parseInt(e.target.value));
    };

    return (
        <div> 
            <input type="number" onChange={handleChange} />
            <button onClick={() => handleIncrementDynamic(1)}>Increment</button>
            <button onClick={() => handleDecrementDynamic(1)}>Decrement</button>
        </div>
    )
} 
