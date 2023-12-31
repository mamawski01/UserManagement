import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username + password);
  };

  return (
    <div className=" flex justify-center flex-col items-center h-screen text-white">
      <div className="flex bg-gray-900 border border-gray-700 p-4 m-2  rounded-md  flex-col md:w-80 ">
        <div className=" flex justify-center">
          <Link className="flex place-content-stretch" to="/loginPage">
            <img className=" w-8 h-8" src="/favicon2.svg" alt="logo" />
            <p className=" font-semibold text-2xl pl-1">TEC</p>
          </Link>
        </div>
        <h1 className="flex justify-center text-center  font-semibold text-2xl mb-3 ">
          Sign in to your account
        </h1>
        <form className="grid gap-y-2" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="  text-xs pb-1 ">
              Your username
            </label>
            <input
              className=" "
              type="text"
              name="username"
              id="username"
              placeholder="username"
              title="Enter your username"
              autoComplete="off"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="  text-xs pb-1">
              Password
            </label>
            <input
              className=" "
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              title="Enter your password"
              autoSave="off"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="md:flex md:justify-between">
            <div className=" flex items-start pb-1">
              <input
                className=" w-4 h-4 "
                type="checkbox"
                name="checkbox"
                title="Click to show/hide password"
              />
              <p className="  text-xs pl-1">Show password</p>
            </div>
            <Link to="#">
              <p className=" text-xs text-sky-500 hover:underline pb-3">
                Forgot password?
              </p>
            </Link>
          </div>
          <button className=" font-semibold bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-sm p-2 rounded-lg w-full hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500">
            Sign in
          </button>
          <div className="sm:flex ">
            <p className=" text-sm ">Don&apos;t have an account yet?</p>
            <Link
              className=" text-sm text-sky-500 hover:underline sm:pl-1"
              to="/registerPage"
            >
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
