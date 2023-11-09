import { useEffect } from "react";
import axios from "axios";
import { Alert } from "@mui/material";

const Inbox=() =>{
    const getInboxMails=() =>{
        try{
            const response=axios.get(`https://mail-box-client-f2b69-default-rtdb.firebaseio.com/inbox.json`);
        } catch(error){
            <Alert severity="danger">!!! Mail Fetching Failed !!!</Alert>
        }
    }

    useEffect(()=>{
        getInboxMails();
    },[]);

    return(
        <ul>

        </ul>
    )
}

export default Inbox;