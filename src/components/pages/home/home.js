import { Button } from "react-bootstrap";
import classes from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/authReducer";

const Home=(props) =>{
    const navigate=useNavigate();
    const dispatch=useDispatch();

    // fetching token & email from local storage on app load
    const token=localStorage.getItem("token");
    const emailId=localStorage.getItem("emailId");

    dispatch(authActions.setToken(token));
   
    const logoutHandler=() =>{
        localStorage.removeItem("token");
        localStorage.removeItem("emailId");

        dispatch(authActions.logout());
        dispatch(authActions.setEmailID(null));
        dispatch(authActions.setToken(null));
        navigate("/login");
    }

    return(
        <>
            <header className={classes.header}>
                <h2>!!! Welcome to your mail box !!!</h2>
                {!!token && <Button variant="danger" onClick={logoutHandler}>Logout</Button>}
            </header><hr/>
        </>
    )
}

export default Home;