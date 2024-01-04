import { useAppSelector, useAppDispatch } from "../data/hook";
import { decrement, increment } from "../data/counterSlice";
import { Link } from "react-router-dom";

export function Calcultor() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Link to={"about"}>About</Link>
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{count}</p>
    </div>
  );
}

export default Calcultor;
