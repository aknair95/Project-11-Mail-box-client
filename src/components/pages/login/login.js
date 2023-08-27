import classes from "./login.module.css";
import { Button,Container,Form } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authActions } from "../../../store/authReducer";
import { useDispatch } from "react-redux";

const Login=() =>{
    const emailRef=useRef();
    const passwordRef=useRef();
    
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const loginHandler= async (e) =>{
        e.preventDefault();
        const enteredEmail=emailRef.current.value;
        const enteredPassword=passwordRef.current.value; 

        try{ 
            const response= await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCU6Gv14nvJALzonBsNjtyx2RO_G4aW4BQ",{
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
             });
             localStorage.setItem("token",response.data.idToken);
             localStorage.setItem("emailId",enteredEmail);

             dispatch(authActions.login());
             dispatch(authActions.setEmailID(enteredEmail));
             dispatch(authActions.setToken(response.data.idToken));
             navigate("/");
            } catch(error){
                console.log(error)
                alert("!!! Incorrect Email or Password !!!");
            }

        emailRef.current.value="";
        passwordRef.current.value="";
    }

    const forgotPasswordHandler=() =>{
        navigate("/resetPassword");
    }

    const createNewAccHandler=() =>{
        navigate("/signUp");
    }

    return(
    <>
        <Container className={classes.formContainer}>
            <h3 className="p-2">LOGIN</h3>
            <Form onSubmit={loginHandler}>
                <Form.Group className="p-3">                    
                    <Form.Control type="email" placeholder="Enter Email ID" required size="lg" ref={emailRef}/>
                </Form.Group>
                <Form.Group className="p-3">                      
                    <Form.Control type="password" placeholder="Enter Password" required size="lg" ref={passwordRef} />
                </Form.Group>
                <div className={classes.Btns}>
                    <Button type="submit" size="lg">LOGIN</Button>
                    <Button variant="link" size="lg" onClick={forgotPasswordHandler}>Forgot Password</Button>
                    <Button variant="link" size="lg" onClick={createNewAccHandler}>Create New Account</Button>
                </div>
            </Form>
        </Container>     
    </>
    )
}

export default Login;