import { useState } from "react";

export default function PracticePage() {
  const [name, setName] = useState(true);

  const onClick = () => {
    setName(!name);
  };

  return (
    <div className=" text-white">
      <div className="">Name:{name ? "BukNoy" : "mirAng the Cat"}</div>
      <button onClick={onClick}> click</button>
    </div>
  );
}
