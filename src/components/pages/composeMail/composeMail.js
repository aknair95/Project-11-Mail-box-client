import { Button, Form, InputGroup } from "react-bootstrap";
import classes from "./compose.module.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRef, useState } from "react";
import { Alert } from "@mui/material";
import axios from "axios";

const ComposeMail=() =>{
    const [editorState,setEditorState]=useState(() =>EditorState.createEmpty());

    const emailRef=useRef();
    const subjectRef=useRef();

    const outboxFirebase= async (updatedEmail,sentMailData) =>{
        try{
            await axios.patch(`https://mail-box-client-f2b69-default-rtdb.firebaseio.com/inbox/${updatedEmail}.json`,{
                sentMailData
            });
            <Alert severity="success">Sent</Alert>  
        } catch(error){
            <Alert severity="danger">!!! Error !!!</Alert>
        }
    }

    const sendMailHandler=(e) =>{
        e.preventDefault();
        const contentState=editorState.getCurrentContent();
        const rawContentState=convertToRaw(contentState);
        const plainContent=rawContentState.blocks[0].text;
     
        const enteredEmail=emailRef.current.value;
        const enteredSubject=subjectRef.current.value;

        const email1=enteredEmail.replace("@","");
        const updatedEmail=email1.replace(".","");

        const sentMailData={
            id: `${updatedEmail}+${Math.random()}`,
            email: enteredEmail,
            subject: enteredSubject,
            content: plainContent 
        }
        outboxFirebase(updatedEmail,sentMailData);
        emailRef.current.value="";
        subjectRef.current.value="";
        setEditorState("");
    }

    return(
        <Form className={classes.formContainer}>
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