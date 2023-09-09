import { useEffect, useState } from "react";

export default function StaticCounter() {
    const [staticCount, setStaticCount] = useState(() => {
        const storedCount = localStorage.getItem('staticCount');
        return storedCount ? parseInt(storedCount) : 0;
    });
    
    useEffect(() => {
        localStorage.setItem('staticCount', staticCount);
    }, [staticCount]);

    const minValue = 0;
    const maxValue = 5;

    const handleIncrementStatic = (staticIncrementValue) => {
        setStaticCount(Math.min(staticCount + staticIncrementValue, maxValue));
    };
    const handleDecrementStatic = (staticDecrementValue) => {
        setStaticCount(Math.max(staticCount - staticDecrementValue, minValue));
    };

    return (
        <div className="my-4">
            <h1>Static Count: {staticCount}</h1>
            <button onClick={() => handleIncrementStatic(1)}>Increment</button>
            <button onClick={() => handleDecrementStatic(1)}>Decrement</button>
        </div>
    )
}


