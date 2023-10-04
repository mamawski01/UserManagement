import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className=" flex justify-center h-max items-center text-white">
      <div className=" m-2 bg-gray-900 border border-gray-700 rounded-md p-2 w-60 sm:w-full  ">
        <div className=" flex justify-center">
          <Link className="flex place-content-stretch" to="/loginPage">
            <img className=" w-8 h-8" src="/favicon2.svg" alt="logo" />
            <p className=" font-semibold text-2xl pl-1">TEC</p>
          </Link>
        </div>
        <h1 className="flex justify-center text-center  font-semibold text-2xl mb-1 ">
          Register an account
        </h1>

        <form
          className="grid gap-1 sm:grid sm:grid-cols-6   sm:gap-x-3 "
          action=""
        >
          <div className="flex justify-center sm:justify-normal  sm:grid sm:row-span-2 sm:col-span-1 ">
            <input className=" w-28 p-8 sm:w-full" type="image" />
          </div>
          <div className="sm:col-span-2 ">
            <label htmlFor="fullName">Full name</label>
            <input
              className="  "
              type="text"
              name="full-name"
              id="fullName"
              placeholder="Full name"
              title="Enter your Full name"
              autoComplete="off"
              required
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="birthDay">Birthday</label>
            <input
              className=" "
              type="date"
              name="birthDay"
              id="birthDay"
              placeholder="Full name"
              title="Enter your Birthday"
              autoComplete="off"
              required
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="gender">Gender</label>
            <select
              className=" "
              type=""
              name="gender"
              id="gender"
              placeholder="Full name"
              title="Select your Gender"
              autoComplete="off"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="sm:col-span-1 ">
            <label htmlFor="IDNo">ID</label>
            <input
              className=" "
              type="text"
              name="cellphoneNo"
              id="IDNo"
              placeholder="Autogenerate"
              title="ID"
              autoComplete="off"
              readOnly
            />
          </div>

          <div className="sm:col-span-1 ">
            <label htmlFor="cellphoneNo">Cellphone</label>
            <input
              className=" "
              type="text"
              name="cellphone-no"
              id="cellphoneNo"
              placeholder="Cellphone"
              title="Enter your Cellphone number"
              autoComplete="off"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="trainingDate">Training Date</label>
            <input
              className=" "
              type="date"
              name="birthDay"
              id="trainingDate"
              placeholder="Full name"
              title="Enter your Birthday"
              autoComplete="off"
              required
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="position">Position</label>
            <select
              className=" "
              type=""
              name="position"
              id="position"
              placeholder=""
              title="Select your position"
              autoComplete="off"
              required
            >
              <option value="sales">Sales</option>
              <option value="cashier">Cashier</option>
              <option value="stockClerk">Stock Clerk</option>
              <option value="optometrist">Optometrist</option>
            </select>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="SSS">SSS</label>
            <input
              className=" "
              type="text"
              name="username"
              id="SSS"
              placeholder="SSS"
              title="SSS"
              autoComplete="off"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="Pag-ibig">Pag-ibig</label>
            <input
              className=" "
              type="text"
              name="username"
              id="Pag-ibig"
              placeholder="Pag-ibig"
              title="Pag-ibig"
              autoComplete="off"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="PhilHealth">PhilHealth</label>
            <input
              className=" "
              type="text"
              name="username"
              id="PhilHealth"
              placeholder="PhilHealth"
              title="PhilHealth"
              autoComplete="off"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="username">Username</label>
            <input
              className=" "
              type="text"
              name="username"
              id="username"
              placeholder="Autogenerate"
              title="Username"
              autoComplete="off"
              required
              readOnly
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="TIN">TIN</label>
            <input
              className=" "
              type="text"
              name="username"
              id="TIN"
              placeholder="TIN"
              title="TIN"
              autoComplete="off"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="password">Password</label>
            <input
              className=" "
              type="text"
              name="username"
              id="password"
              placeholder="Password"
              title="Username"
              autoComplete="off"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input
              className=" "
              type="text"
              name="username"
              id="ConfirmPassword"
              placeholder="Confirm Password"
              title="Username"
              autoComplete="off"
              required
            />
          </div>
          <div className="sm:col-span-full ">
            <label htmlFor="address">Address</label>
            <textarea
              className="  resize-none h-8 focus:h-24 sm:focus:h-16 sm:focus:overflow-hidden overflow-hidden focus:overflow-visible"
              type="text"
              name="address"
              id="address"
              placeholder="address"
              title="Enter your Address"
              autoComplete="off"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="nameEmergency">Name of Emergency Person</label>
            <input
              className=""
              type="text"
              name="nameEmergency"
              id="nameEmergency"
              placeholder="Name of Emergency Person"
              title="Enter your Name of Emergency Person"
              autoComplete="off"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="numberEmergency">Number of Emergency Person</label>
            <input
              className="  "
              type="text"
              name="numberEmergency"
              id="numberEmergency"
              placeholder="Number of Emergency Person"
              title="Enter your Number of Emergency Person"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex col-span-full gap-4">
            <button className="font-semibold bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-sm p-2 rounded-lg w-full hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 ">
              Register new account
            </button>
            <button className="font-semibold text-black bg-gradient-to-bl from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% text-sm p-2 rounded-lg w-full hover:from-yellow-500 hover:via-purple-500 hover:to-pink-500 ">
              Cancel Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
