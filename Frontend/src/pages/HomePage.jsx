import UserTopNav from "../components/userComponents/UserTopNav";

export default function HomePage() {
  var self = 100;
  self = self - 50;
  self = self - 50;
  self = self - 50;
  var filthy = "ewrwe";
  {
    if (filthy) {
      console.log("filthy animal");
    } else {
      console.log("not filthy animal");
    }
  }
  console.log(self);
  return (
    <div className="">
      <UserTopNav></UserTopNav>
      <div className="p-5">
        <h1>List</h1>
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
