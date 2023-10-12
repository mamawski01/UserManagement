import Axios from "axios";
import { useEffect, useState } from "react";

const PracticePage = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className=" text-white">
      <button onClick={fetchCatFact}>cat fact</button>
      <p>{catFact}</p>
    </div>
  );
};

export default PracticePage;
