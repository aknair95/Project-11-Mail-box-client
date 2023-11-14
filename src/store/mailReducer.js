import { createSlice } from "@reduxjs/toolkit";

const initialState={ inboxMailList:[], outboxMailList:[] }

const mailReducer=createSlice({
    name: "mailDetails",
    initialState: initialState,
    reducers: {
        addInboxMail(state,action){
            state.inboxMailList=[...state.inboxMailList,action.payload];
        },
        deleteInboxMail(state,action){
            state.inboxMailList=state.inboxMailList.filter((mail) =>{
                return action.payload!==mail.id;
            });
        },
        deleteOutboxMail(state,action){
            state.outboxMailList=state.outboxMailList.filter((mail) =>{
                return action.payload!==mail.id;
            });
        },
        markMailRead(state,action){
            state.inboxMailList=state.inboxMailList.map((mail) =>{
                if(mail.id===action.payload){
                    mail.read=true;
                }
                return mail;
            });
        },
        unreadMail(state){
            const unreadCount=state.inboxMailList.reduce((count,mail) =>{
                if(mail.read===false){
                    return count++;
                }
                return count;
            },0);
            return unreadCount;
        }
    }
})

export const mailActions=mailReducer.reducer;

export default mailReducer;