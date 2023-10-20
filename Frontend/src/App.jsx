import { useRoutes, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPutPage from "./pages/UserPutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PracticePage from "./pages/PracticePage";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <div className="">
          <HomePage></HomePage> <Outlet></Outlet>
        </div>
      ),
      children: [
        {
          path: "/",
          element: <div className="">Home</div>,
        },
        {
          path: "/loginPage",
          element: <LoginPage></LoginPage>,
        },
        {
          path: "/userPutPage",
          element: <UserPutPage></UserPutPage>,
        },
        {
          path: "/registerPage",
          element: <RegisterPage></RegisterPage>,
        },
        {
          path: "/practicePage",
          element: <PracticePage></PracticePage>,
        },
      ],
    },
  ]);

  return routes;
};

export default App;
