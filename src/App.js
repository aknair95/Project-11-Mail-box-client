import SignUp from "./components/pages/signUp/signUp";
import Login from "./components/pages/login/login";
import ResetPassword from "./components/pages/resetPassword/resetPassword";
import Home from "./components/pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigationBar";
import Sidebar from "./components/sideBar";
import './index.css';
import ComposeMail from "./components/pages/composeMail/composeMail";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <NavigationBar/>
          <div className="app_body">
            <Sidebar/>
            <Routes >
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signUp" element={<SignUp/>}/>
              <Route path="/forgotPswd" element={<ResetPassword/>}/>
              <Route path="/compose" element={<ComposeMail/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
