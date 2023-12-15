import { Button, Form, InputGroup } from "react-bootstrap";
import classes from "./compose.module.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRef, useState } from "react";
import { Alert } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../../../store/mailReducer";
import { Navigate } from "react-router-dom";

const ComposeMail=() =>{
    const [editorState,setEditorState]=useState(() =>EditorState.createEmpty());
    const dispatch=useDispatch();
    const allmails=useSelector((state) =>state.mailDetails.allMails);
    const emailRef=useRef();
    const subjectRef=useRef();

    const token=localStorage.getItem("token");

    const sendMailHandler=async(e) =>{
        e.preventDefault();
        const contentState=editorState.getCurrentContent();
        const rawContentState=convertToRaw(contentState);
        const plainContent=rawContentState.blocks[0].text;
        
        const enteredEmail=emailRef.current.value;
        const enteredSubject=subjectRef.current.value;

        const senderEmail=localStorage.getItem("email");

        const sentMailDetails={ 
            id: `${Math.random()}`,
            sender: senderEmail,
            receiver: enteredEmail,
            subject: enteredSubject,
            content: plainContent,
            read: false,
            checked: false
        }
        const updatedAllMails=[...allmails,sentMailDetails];
        dispatch(mailActions.addMail(updatedAllMails));

        try{
            await axios.patch(`https://mail-box-client-f2b69-default-rtdb.firebaseio.com/mails.json`,{
                allmails: updatedAllMails
        });
        <Alert severity="success">!!! Mail Sent !!!</Alert>  
        } catch(error){
        <Alert severity="danger">!!! Error !!!</Alert>
        }

        emailRef.current.value="";
        subjectRef.current.value="";
        setEditorState("");
    }

    return(
        <Form className={classes.formContainer}>
            {token===null && <Navigate to="/login"/>}
            <InputGroup className="mb-3">
                <InputGroup.Text>To</InputGroup.Text>
                <Form.Control
                 type="email" 
                 placeholder="example@gmail.com" 
                 required 
                 size="md"
                 ref={emailRef}/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Subject</InputGroup.Text>
                <Form.Control
                 type="text" 
                 required
                 size="md"
                 ref={subjectRef}/>
            </InputGroup>
            <Editor 
                toolbarClassName={classes.toolbar}
                editorClassName={classes.editorSpace}
                wrapperClassName={classes.wrapper}
                editorState={editorState}
                onEditorStateChange={setEditorState} />
            <Button type="button" onClick={sendMailHandler}>Send</Button>
        </Form>
    )
}

export default ComposeMail;