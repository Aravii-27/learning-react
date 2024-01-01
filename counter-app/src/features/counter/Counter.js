import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  addIncrementAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetall = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div className="count">
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
       <button onClick={()=>dispatch(addIncrementAmount(addValue))}>Add Amount</button>
       <button onClick={resetall}>resetall</button>
      </div>
    </div>
  );
};

export default Counter;
