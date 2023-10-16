import { useState } from "react";

const Call = () => {
  const [PHPValue, setPHPValue] = useState(0);

  const convertToUSD = () => {
    setPHPValue(PHPValue * 0.0176);
  };

  return (
    <div className=" text-white">
      <div className=" w-56">
        <input
          type="text"
          onChange={(event) => {
            setPHPValue(event.target.value);
          }}
        />
        <button onClick={convertToUSD}>to USD</button>
        <input type="text" readOnly value={PHPValue} />
      </div>
    </div>
  );
};

export default Call;
