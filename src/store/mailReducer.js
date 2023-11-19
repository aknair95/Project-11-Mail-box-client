import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "@mui/material";


    const getAllMails= async() =>{
      try{
          const response=await axios.get(`https://mail-box-client-f2b69-default-rtdb.firebaseio.com/mails.json`);
          return response.data;
          
        //   if(response.data!==null){
        //     dispatch(mailActions.addMail(response.data));
        //   }
      } catch(error){
          <Alert severity="danger">!!! Mail Fetching Failed !!!</Alert>
      }
    }
   
const initialState={ allMails: getAllMails(), outboxMails:[] }

const mailReducer=createSlice({
    name: "mailDetails",
    initialState: initialState,
    reducers: {
        addMail(state,action){
            state.allMails.push({...action.payload});
        },
        deleteMail(state,action){
            state.allMails.filter((mail) =>{ return mail.id!==action.payload.id});
        }
        }
    })

export const mailActions=mailReducer.actions;

export default mailReducer;