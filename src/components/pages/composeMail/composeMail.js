import { Button, Form, InputGroup } from "react-bootstrap";
import classes from "./compose.module.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ComposeMail=() =>{
    const sendMailHandler=() =>{
        alert("!! Mail sent successfully !!")
    }
    return(
        <Form className={classes.formContainer}>
            <InputGroup className="mb-3">
                <InputGroup.Text>To</InputGroup.Text>
                <Form.Control 
                 placeholder="example@gmail.com" 
                 required 
                 size="md"/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Subject</InputGroup.Text>
                <Form.Control 
                 required
                 size="md"/>
            </InputGroup>
            <div className={classes.editorSpace}>
                <Editor/>
            </div>
            <Button onClick={sendMailHandler}>Send</Button>
        </Form>
    )
}

export default ComposeMail;