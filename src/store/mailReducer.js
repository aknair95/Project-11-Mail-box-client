import { createSlice } from "@reduxjs/toolkit";

const initialState={ allMails: [] }

const mailReducer=createSlice({
    name: "mailDetails",
    initialState: initialState,
    reducers: {
        addMail(state,action){
            state.allMails=action.payload;
        }
        }
    });

export const mailActions=mailReducer.actions;

export default mailReducer;