import UserTopNav from "../components/userComponents/UserTopNav";

function HomePage() {
  //

  return (
    <div className="">
      <UserTopNav></UserTopNav>
      <div className="p-5">
        <h1>List</h1>
        <div className=" grid gap-1">
          <input type="text" id="firstInput" />
          <input type="text" id="secondInput" />
          <input type="text" readOnly id="output" />
        </div>
        <button
          className=" border border-solid bg-red-400 hover:bg-slate-500 p-2 hover:text-white rounded-full h-full"
          onClick={null}
        >
          click
        </button>
        <h1 className="lol">lol</h1>
        <ul>{null}</ul>
      </div>
    </div>
  );
}

export default HomePage;
