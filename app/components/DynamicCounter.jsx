import { useEffect, useState } from "react";

export default function DynamicCounter() {
    const [dynamicCount, setDynamicCount] = useState(() => {
        const storeDynamicdCount = localStorage.getItem('dynamicCount');
        return storeDynamicdCount ? parseInt(storeDynamicdCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem('dynamicCount', dynamicCount);
    }, [dynamicCount]);

    const handleIncrementDynamic = (dynamicIncrementValue) => {
        setDynamicCount(dynamicCount + dynamicIncrementValue);
    };

    const handleDecrementDynamic = (dynamicDecrementValue) => {
        setDynamicCount(dynamicCount - dynamicDecrementValue);
    };

    const handleChange = (e) => {
        setDynamicCount(parseInt(e.target.value));
    };

    return (
        <div>
            <h1>Dynamic Count: {dynamicCount}</h1>
            <input type="number" onChange={handleChange} />
            <button onClick={() => handleIncrementDynamic(1)}>Increment</button>
            <button onClick={() => handleDecrementDynamic(1)}>Decrement</button>
        </div>
    )
} 
