import React, { useEffect, useState } from "react";
const StateExample=() => {
    const [Count,setCount] =useState(0);
    useEffect(() => {
        console.log("Hi");
    },[])
    return(
        <>
        <div className="container p-5">stateexample
            <h2>Counter:{Count}</h2>
            <button onClick={() => setCount(Count + 1)}>Increment</button>
        </div>
        </>
    )
}

export default StateExample