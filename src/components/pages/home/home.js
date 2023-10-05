
import classes from "./home.module.css";

const Home=(props) =>{
    
    // fetching token & email from local storage on app load
    const token=localStorage.getItem("token");
    const emailId=localStorage.getItem("emailId");

    return(
        <header className={classes.hdr}>
            <h2>!!! Welcome to your Mail Box !!!</h2><hr/>
        </header>
    )
}

export default Home;