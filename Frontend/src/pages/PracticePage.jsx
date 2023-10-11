const PracticePage = () => {
  const p = new Promise((fullFilled, notFullFilled) => {
    let a = 1 + 1;
    a == 2 ? fullFilled("success") : notFullFilled("failed");
  });

  p.then((message) => {
    console.log("this is in the then " + message);
  });
  return (
    <div className=" text-white">
      <button> Generate cat ../..</button>
      <div className=""></div>
    </div>
  );
};

export default PracticePage;
