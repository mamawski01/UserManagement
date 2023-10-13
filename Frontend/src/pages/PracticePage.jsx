import Axios from "axios";
import { useState } from "react";
const Call = () => {
  const [reason, setReason] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setReason(res.data[0]);
      }
    );
  };

  return (
    <div className=" text-white flex flex-col">
      <button
        onClick={() => {
          fetchData("party");
        }}
      >
        party
      </button>
      <button
        onClick={() => {
          fetchData("gaming");
        }}
      >
        gaming
      </button>
      <button
        onClick={() => {
          fetchData("unbelievable");
        }}
      >
        unbelievable
      </button>
      <p>Category: {reason.category}</p>
      <p>Reason: {reason.excuse}</p>
    </div>
  );
};

export default Call;
