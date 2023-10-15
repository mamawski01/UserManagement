import { useState } from "react";

const Call = () => {
  const [show, setShow] = useState(false);

  const reveal = () => {
    setShow(!show);
  };

  return (
    <div className=" text-white">
      <div className="">
        {show ? "visible" : ""}
        <button onClick={reveal}> click</button>
      </div>
    </div>
  );
};

export default Call;
