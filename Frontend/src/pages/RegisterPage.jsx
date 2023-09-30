import { useState } from "react";

const RegisterPage = () => {
  const [count, setCount] = useState(0);

  function minusCount() {
    setCount((count) => count - 1);
  }
  function plusCount() {
    setCount((count) => count + 1);
  }
  return (
    <div className=" text-white p-5">
      <button className=" border p-2 bg-slate-800" onClick={minusCount}>
        -
      </button>
      <span className=" p-3">{count}</span>
      <button className=" border p-2 bg-slate-800" onClick={plusCount}>
        +
      </button>
    </div>
  );
};

export default RegisterPage;
