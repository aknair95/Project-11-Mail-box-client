import { useParams } from "react-router-dom";
import { Row,Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import classes from "./ReadMails.module.css";

const ReadMail=(e) =>{
    const param=useParams();
    const ID=param.ID.replace(":","");
    const allmails=useSelector((state) => state.mailDetails.allMails);

    const mail=allmails.filter((mail) =>{ 
        return mail.id===ID;
    })

    if(mail.length===0){
        mail.push(localStorage.getItem("mail"));
    }

    const mailStr=JSON.stringify(mail[0]);
    localStorage.setItem("mail",mailStr);

    return(
        <Card className={classes.mailLayout}>  
            <Row>
                <Col className={classes.column}>
                    <h5>From: </h5>{" "}
                    <p>{mail[0].sender}</p>
                </Col><br/><hr/>
            </Row>
            <Row>
                <Col className={classes.column}>
                    <h5>To: </h5>{" "}
                    <p>{mail[0].receiver}</p>
                </Col><br/><hr/>
            </Row>
            <Row>
                <Col className={classes.column}>
                    <h5>Subject: </h5>{" "}
                    <p>{mail[0].subject}</p>
                </Col><br/><hr/>
            </Row>
            <Row>
                <Col className={classes.column}>
                    <h5>Content: </h5>{" "}
                    <p>{mail[0].content}</p>
                </Col>
            </Row>
        </Card>
    )
}

export default ReadMail;