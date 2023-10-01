// import { useEffect, useState } from "react";
const RegisterPage = () => {
  // const [name, setName] = useState(["cat", "dog", "cow"]);
  let admin = false;

  // const [i, setI] = useState(0);

  // const fx = () => {
  //   setI(i + 1);
  // };
  // useEffect(() => {
  //   console.log(i);
  // });
  // let age = 1;
  // let name = age < 20 ? "young" : age === 20 ? "same age" : "old";
  // console.log(name);

  const animals = ["dog", "cat", "goat"];

  animals.map((e) => {
    return <h1>{e} </h1>;
  });

  return admin === true ? (
    <>
      <h1 className=" text-white">{e} Render Old</h1>
    </>
  ) : (
    <>
      <h1 className=" text-white">Render young</h1>
    </>
  );
};

export default RegisterPage;
