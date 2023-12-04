import SignUp from "./components/pages/signUp/signUp";
import Login from "./components/pages/login/login";
import ResetPassword from "./components/pages/resetPassword/resetPassword";
import Home from "./components/pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigationBar";
import Sidebar from "./components/sideBar";
import './index.css';
import ComposeMail from "./components/pages/composeMail/composeMail";
import Inbox from "./components/pages/Inbox/inbox";
import Outbox from "@mui/icons-material/Outbox";
import MailOpen from "./components/mailOpen";
import useFetchMailsFirebase from "./components/fetchMailsFirebase";

function App() {
  useFetchMailsFirebase();
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
              <Route path="/inbox" element={<Inbox/>}/>
              <Route path="/inbox/mailOpen" element={<MailOpen/>}/>
              <Route path="/outbox" element={<Outbox/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
