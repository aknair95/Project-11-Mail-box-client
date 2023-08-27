import SignUp from "./components/pages/signUp/signUp";
import Login from "./components/pages/login/login";
import ResetPassword from "./components/pages/resetPassword/resetPassword";
import Home from "./components/pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/resetPassword" element={<ResetPassword/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
