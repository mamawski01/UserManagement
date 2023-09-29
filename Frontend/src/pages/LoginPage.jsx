const LoginPage = () => {
  return (
    <div className=" flex justify-center flex-col items-center m-6 ">
      <a className="flex" href="">
        <img className=" w-6 h-6" src="/favicon.svg" alt="logo" />
        <p className="text-white font-semibold">TEC</p>
      </a>
      <div className="flex bg-gray-900 border p-4 m-3  rounded-md border-gray-600 flex-col w-1/2 md:w-full">
        <h4 className=" text-white font-semibold mb-2 ">
          Sign in to your account
        </h4>
        <form action="">
          <p className=" text-white text-xs pb-1">Your username</p>
          <input
            className=" rounded-md border border-gray-600 bg-gray-700 text-white p-1 text-xs w-full"
            type="text"
            name="username"
            placeholder="username"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
