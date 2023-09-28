import UserTopNav from "../components/userComponents/UserTopNav";

function HomePage() {
  return (
    <div className="">
      <UserTopNav></UserTopNav>
      <div className="p-5">
        <h1 className="lol">hello</h1>
        <button className="hover:bg-slate-950 text-white rounded-full p-3 bg-slate-500">
          click
        </button>
      </div>
    </div>
  );
}

export default HomePage;
