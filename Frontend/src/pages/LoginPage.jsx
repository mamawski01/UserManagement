import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <div className=" flex justify-center flex-col items-center h-screen ">
      <Link className="flex place-content-stretch" to="/loginPage">
        <img className=" w-8 h-8" src="/favicon.svg" alt="logo" />
        <p className="text-white font-semibold text-2xl pl-1">TEC</p>
      </Link>
      <div className="flex bg-gray-900 border p-4 m-3  rounded-md border-gray-600 flex-col md:w-80 ">
        <h1 className=" text-white font-semibold text-2xl mb-3 ">
          Sign in to your account
        </h1>
        <form onSubmit={handleSubmit}>
          <p className=" text-white text-xs pb-1 ">Your username</p>
          <input
            className=" rounded-md bg-gray-700 text-white p-2 text-xs w-full mb-4 outline-none border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="text"
            name="username"
            placeholder="username"
            title="Enter your username"
            autoComplete="off"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className=" text-white text-xs pb-1">Password</p>
          <input
            className=" rounded-md bg-gray-700 text-white p-2 text-xs w-full mb-4 outline-none border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="password"
            name="password"
            placeholder="••••••••"
            title="Enter your password"
            autoSave="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="md:flex md:justify-between">
            <div className=" flex items-start pb-1">
              <input
                className=" w-4 h-4"
                type="checkbox"
                name="checkbox"
                title="Click to show/hide password"
              />
              <p className=" text-white text-xs pl-1">Show password</p>
            </div>
            <Link to="#">
              <p className=" text-xs text-sky-500 hover:underline pb-3">
                Forgot password?
              </p>
            </Link>
          </div>
          <button
            className=" text-white bg-blue-600 text-sm p-2 rounded-lg w-full hover:bg-blue-800 mb-3"
            type="submit"
          >
            Sign in
          </button>
          <div className="sm:flex ">
            <p className=" text-sm text-white">
              Don&apos;t have an account yet?
            </p>
            <Link
              className=" text-sm text-sky-500 hover:underline sm:pl-1"
              to="#"
            >
              {" "}
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
