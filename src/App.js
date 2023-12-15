
import useFetchMailsFirebase from "./components/fetchMailsFirebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import './index.css';

const SignUp=lazy(() => import("./components/pages/signUp/signUp"));
const Login=lazy(() => import("./components/pages/login/login"));
const ResetPassword=lazy(() => import("./components/pages/resetPassword/resetPassword"));
const NavigationBar=lazy(() => import("./components/navigationBar"));
const Sidebar=lazy(() => import("./components/sideBar"));
const Home=lazy(() => import("./components/pages/home/home"));
const ComposeMail=lazy(() => import("./components/pages/composeMail/composeMail"));
const Inbox=lazy(() => import("./components/pages/Inbox/inbox"));
const Outbox=lazy(() => import("./components/pages/outbox/outbox"));
const ReadMail=lazy(() => import("./components/ReadMail"));

function App() {
  useFetchMailsFirebase();
  return (
    <div className="app">
      <BrowserRouter>
          <Suspense><NavigationBar/></Suspense>
          <div className="app_body">
            <Suspense><Sidebar/></Suspense>
            <Routes >
              <Route path="/" element={<Suspense><Home/></Suspense>}/>
              <Route path="/login" element={<Suspense><Login/></Suspense>}/>
              <Route path="/signUp" element={<Suspense><SignUp/></Suspense>}/>
              <Route path="/forgotPswd" element={<Suspense><ResetPassword/></Suspense>}/>
              <Route path="/compose" element={<Suspense><ComposeMail/></Suspense>}/>
              <Route path="/inbox" element={<Suspense><Inbox/></Suspense>}/>
              <Route path="/inbox/:ID" element={<Suspense><ReadMail/></Suspense>}/>
              <Route path="/outbox" element={<Suspense><Outbox/></Suspense>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
