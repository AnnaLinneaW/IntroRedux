import { increment, decrement } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h2>{count}</h2>
        <button
        onClick={() => {
            dispatch(decrement());
        }}
        >
        -
        </button>
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        +
      </button>
    </div>
  );
};
