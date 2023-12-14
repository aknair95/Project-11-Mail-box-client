
import classes from "./home.module.css";
import { Navigate } from "react-router-dom";

const Home=(props) =>{
    
    // fetching token & email from local storage on app load
    const token=localStorage.getItem("token");

    return(
        <header className={classes.hdr}>
            {token===null && <Navigate to="/login"/>}
            <h2>!!! Welcome to your Mail Box !!!</h2><hr/>    
        </header>
    )
}

export default Home;