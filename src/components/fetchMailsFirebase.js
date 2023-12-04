import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mailActions } from "../store/mailReducer"; 
import axios from "axios";
import { Alert } from "@mui/material";

const useFetchMailsFirebase=() =>{
    const dispatch=useDispatch();
    const allMails=useSelector((state) => state.mailDetails.allMails );

    useEffect(() =>{
        const getFirebaseMails=async() =>{
          try{
            const response=await axios.get(`https://mail-box-client-f2b69-default-rtdb.firebaseio.com/mails.json`);
            if(response.data!==null && response.data.length>allMails.length){
              dispatch(mailActions.addMail(response.data));
            }
        } catch(error){
            <Alert severity="warning">!!! Mail Fetching Failed !!!</Alert>
        }}
        getFirebaseMails();
      },[]);
}

export default useFetchMailsFirebase;