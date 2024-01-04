import { useAppSelector, useAppDispatch } from "../data/kail";
import { decrement, increment } from "../data/hitungSlice";
import { Link } from "react-router-dom";

export function Kalkulator() {
  const count = useAppSelector((state) => state.hitung.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Link to={"tentang"}>Tentang</Link>
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{count}</p>
    </div>
  );
}

export default Kalkulator;
