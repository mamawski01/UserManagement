import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPutPage from "./pages/UserPutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage></HomePage>}></Route>
        <Route path="/userPut" element={<UserPutPage></UserPutPage>}></Route>
        <Route path="/loginPage" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/registerPage"
          element={<RegisterPage></RegisterPage>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
