import { Link } from "react-router-dom";

export default function UserTopNav() {
  return (
    <div className=" bg-slate-900 m-3 p-3 text-white font-bold container">
      <div className="flex justify-around">
        <Link to="/">Home</Link>
        <Link to="/userPut">Update User</Link>
      </div>
    </div>
  );
}
