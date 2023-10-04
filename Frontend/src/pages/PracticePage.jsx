const PracticePage = () => {
  const click = () => {
    console.log("button lick");
  };
  return (
    <div className="text-white grid justify-center h-screen items-center bg-slate-700">
      <button onClick={click}>click</button>
    </div>
  );
};

export default PracticePage;
