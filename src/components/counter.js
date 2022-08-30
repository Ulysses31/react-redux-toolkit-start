import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../state/reducers";

export default function Counter() {
  const dispatch = useDispatch();
  const { actions } = counterSlice;
  const { increment, decrement, reset } = actions;
  let count = useSelector((state) => state.count);

  const incrementHandler = () => {
    dispatch(increment(count + 1));
  };
  const decrementHandler = () => {
    dispatch(decrement(count - 1));
  };
  const resetHandler = () => {
    dispatch(reset((count = 0)));
  };

  return (
    <>
      <h1>Counter</h1>
      <span style={{ fontWeight: "bold", fontSize: "2em" }}>{count}</span>
      <br />
      <button onClick={incrementHandler}>Increase</button>
      <button onClick={decrementHandler}>Decrease</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
}
