import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPutPage from "./pages/UserPutPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage></HomePage>}></Route>
        <Route path="/userPut" element={<UserPutPage></UserPutPage>}></Route>
      </Routes>
    </>
  );
}
