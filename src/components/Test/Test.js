import React, { useGlobal, useDispatch, addCallback, useEffect } from "reactn";

export default function Test() {
  const [ta, setTa] = useGlobal("tuananh");
  const increment = useDispatch(incrementReducer);
  const decrement = useDispatch(decrementReducer);
  const increment2 = useDispatch("increment");

  useEffect(() => {
    console.log("rerender");
    // setTimeout(() => {
    //   setTa(65865);
    // }, 1000);
  }, [ta]);

  return (
    <div>
      <div>{ta}</div>
      <button onClick={() => increment({ amount: 1 })}>Add 1</button>
      <button onClick={() => increment({ amount: 3 })}>Add 3</button>
      <button onClick={() => decrement({ amount: 5 })}>Subtract 5</button>
      <button onClick={() => setTa(6969)}>Increment</button>
      <button onClick={() => increment2(5)}>Increment2</button>
    </div>
  );
}

export function TestAbc() {
  addCallback(global => {
    // console.log(`The new value is ${global.tuananh}!`);

    // If the global state is anything other than 1, don't change it.
    return null;
  });

  return <div>TestAbc</div>;
}
