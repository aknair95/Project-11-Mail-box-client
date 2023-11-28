
import { Button, ListGroup } from "react-bootstrap";
import classes from "./inbox.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../../../store/mailReducer";

const Inbox=() =>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const allmails=useSelector((state) => state.mailDetails.allMails);

    const onClickMailOpenHandler=(e) =>{
        navigate("/inbox/mailOpen");
    }

    const onDeleteMailHandler=(e) =>{
        dispatch(mailActions.deleteMail(e.mail.id));
    }

    return(
        <div className={classes.mailList}>
            <ListGroup as="ul">  
            { 
                allmails.map((mail) =>{
                    console.log(mail.subject)
                    return( <div key={mail.id} className={classes.mailDetails}>
                                <ListGroup.Item as="li" onClick={onClickMailOpenHandler} mail={mail}>
                                    <button type="checkbox" />
                                    <p>{mail.receiver}</p><p>{mail.subject}</p><p>{mail.content}</p>
                                    <Button type="click" variant="danger" onClick={onDeleteMailHandler}>Delete</Button>
                                </ListGroup.Item>
                            </div>     
                            
                    )
                })}
            </ListGroup>    
        </div>
    )
}

export default Inbox;