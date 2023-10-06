import { useState } from "react";
const PracticePage = () => {
  let [textColor, setTextColor] = useState("green");

  return (
    <div className=" text-white">
      <h1 style={{ color: textColor }}>BukNoy</h1>
      <button
        onClick={() => {
          setTextColor(textColor === "green" ? "violet" : "green");
        }}
      >
        click
      </button>
    </div>
  );
};

export default PracticePage;
