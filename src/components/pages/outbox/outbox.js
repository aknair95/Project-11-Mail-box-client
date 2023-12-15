
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import classes from "./outbox.module.css";
import { Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../../../store/mailReducer";
import { Checkbox } from "@mui/material";
import { Alert } from "@mui/material";
import axios from "axios";

const Outbox=() =>{
    const dispatch=useDispatch();
    const allmails=useSelector((state) => state.mailDetails.allMails);
    const token=useSelector((state) => state.authentication.token);
    const userEmail=localStorage.getItem("email");

    const sentMails=allmails.filter((mail) =>{
        return mail.sender===userEmail;
    });
 
    const setCheckedHandler=async(e) =>{
        const checkedMails=allmails.map((mail) =>{
            if(e.target.id===mail.id){
                if(mail.checked===false){
                    mail={...mail,checked:true};
                }else{
                    mail={...mail,checked:false};
                }    
            }
            return mail;
        })
        dispatch(mailActions.addMail(checkedMails));

        try{
            await axios.patch(`https://mail-box-client-f2b69-default-rtdb.firebaseio.com/mails.json`,{
                allmails: checkedMails
        }); 
        } catch(error){
        <Alert severity="warning">!!! Error !!!</Alert>
        }
    }

    const onDeleteMailHandler=async(e) =>{
        const updatedMails=allmails.filter((mail) =>{
            return e.target.id!==mail.id;
        });

        dispatch(mailActions.addMail(updatedMails));

        try{
            await axios.patch(`https://mail-box-client-f2b69-default-rtdb.firebaseio.com/mails.json`,{
                allmails: updatedMails
        });
        <Alert severity="success">!!! Mail Deleted !!!</Alert>  
        } catch(error){
        <Alert severity="warning">!!! Error !!!</Alert>
        }
    }

    return(
        <div className={classes.mailList}>
            {token===null && <Navigate to="/login"/>} 
            <ListGroup as="ul">  
            { 
                sentMails.map((mail) =>{
                    return( <Card className={classes.mailDetails } key={mail.id}>
                                <ListGroup.Item as="li">
                                    <Row>
                                        <Col>
                                            <Checkbox
                                             id={mail.id}
                                             size="small" 
                                             onClick={setCheckedHandler}
                                             checked={mail.checked}
                                             />    
                                        </Col>
                                        <Col className="col-8">
                                            <Link to={`/inbox/:${mail.id}`} className={classes.mailBody}>
                                                    <Col>
                                                        <p>{mail.receiver}</p>
                                                    </Col>
                                                    <Col>
                                                        <p>{mail.subject}</p>
                                                    </Col> 
                                                    <Col>
                                                        <p>{mail.content}</p>
                                                    </Col>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Button
                                             id={mail.id}
                                             size="sm" 
                                             type="click" 
                                             variant="danger" 
                                             onClick={onDeleteMailHandler}>Delete</Button>
                                        </Col>      
                                    </Row>  
                                </ListGroup.Item>
                            </Card>      
                    )
                })}
            </ListGroup>   
        </div>
    )
}

export default Outbox ;