
import { Button, ListGroup } from "react-bootstrap";
import classes from "./outbox.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../../../store/mailReducer";

const Outbox=() =>{
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
        <>
           { 
            allmails.map((mail) =>{
                return( 
                        <ListGroup as="ul" className={classes.mailList}>      
                            <ListGroup.Item as="li" variant="primary" onClick={onClickMailOpenHandler} key={mail.id} mail={mail}>
                                <button type="checkbox" />
                                <p>{mail.receiver}</p><p>{mail.subject}</p><p>{mail.content}</p>
                                <Button type="click" variant="danger" onClick={onDeleteMailHandler}>Delete</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    )
            })}
        </>
    )
}

export default Outbox ;