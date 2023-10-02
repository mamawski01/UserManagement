import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className=" flex justify-center  h-screen items-center text-white">
      <div className=" mx-auto bg-gray-900 border border-gray-700 m-2  rounded-md p-4 w-60 sm:w-full sm:mx-3 ">
        <div className=" flex justify-center">
          <Link className="flex place-content-stretch" to="/loginPage">
            <img className=" w-8 h-8" src="/favicon2.svg" alt="logo" />
            <p className=" font-semibold text-2xl pl-1">TEC</p>
          </Link>
        </div>
        <h1 className="flex justify-center text-center  font-semibold text-2xl mb-6 ">
          Register an account
        </h1>
        <form
          className="grid gap-2 sm:grid sm:grid-cols-2 sm:gap-x-3"
          action=""
        >
          <div>
            <label htmlFor="fullName">Full name</label>
            <input
              className=" rounded-md bg-gray-700/25  p-2 text-xs w-full  outline-none border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="text"
              name="full-name"
              id="fullName"
              placeholder="Full name"
              title="Enter your Full name"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <textarea
              className=" rounded-md bg-gray-700/25  p-2 text-xs w-full  outline-none border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none focus:h-24 overflow-hidden focus:overflow-visible scrollbar-thin"
              type="text"
              name="address"
              id="address"
              placeholder="address"
              title="Enter your Address"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label htmlFor="birthDay">Birthday</label>
            <input
              className=" rounded-md bg-gray-700/25  p-2 text-xs w-full  outline-none border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="date"
              name="birthDay"
              id="birthDay"
              placeholder="Full name"
              title="Enter your Birthday"
              autoComplete="off"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
