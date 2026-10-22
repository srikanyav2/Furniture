import React, { useMemo, useState } from "react";

const Optimazation = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const result = useMemo(() => {
    console.log("calculating result");
    return number;
  }, [ number]);

  console.log("component rendered")

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add Count</button>

      <h2>Result: {result}</h2>

      <button onClick={() => setNumber(number + 1)}>Add Number</button>
    </>
  );
};

export default Optimazation;