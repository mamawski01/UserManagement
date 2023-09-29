import { Link } from "react-router-dom";

const UserTopNav = () => {
  return (
    <div className=" bg-slate-900  p-1 text-white font-bold container">
      <div className="flex justify-around">
        <Link to="/" className=" hover:bg-black">
          Home
        </Link>
        <Link to="/userPut" className=" hover:bg-black">
          Update User
        </Link>
      </div>
    </div>
  );
};

export default UserTopNav;
