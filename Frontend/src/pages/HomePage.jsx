import UserTopNav from "../components/userComponents/UserTopNav";

export default function HomePage() {
  let x = 68;
  let y = 100;
  let chmabaNumber1 = 69;
  let chmabaNumber2 = 101;

  if (x === chmabaNumber1 && y === chmabaNumber2) {
    console.log("chamba choy");
    document.getElementsByClassName("lol").innerHTML = "chamba choy";
  } else if (x === chmabaNumber1 || y === chmabaNumber2) {
    console.log("chamba isa choy");
    document.getElementsByClassName("lol").innerHTML = "chamba isa choy";
  } else {
    console.log(!"wala2x gid chamba");
    document.getElementsByClassName("lol").innerHTML = "wala2x gid chamba";
  }

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
