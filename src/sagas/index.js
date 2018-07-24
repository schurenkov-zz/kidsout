import "regenerator-runtime/runtime";
import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import * as api from '../api/main-api';
const getState = state =>  state.mainState;

function* fetchDialogs() {
   try {
      const dialogs = yield call(api.getDialogs);
      yield put({type: "DIALOG_FETCH_SUCCEEDED", dialogs: dialogs});
   } catch (e) {
      yield put({type: "DIALOG_FETCH_FAILED"});
   }
}

function* sendMessage(text){
  try {
     const state = yield select(getState)
     const date = new Date();
     const hours = date.getHours();
     const minutes = date.getMinutes();
     const newMessage = {};
     const newDialog = {}
     const lastMessageItem = Object.keys(state.messages).length + 1;

     const message =  {
         id: lastMessageItem,
         text: text.text,
         user: state.currenUser.id,
         time: hours + ':' + minutes
     }
     newMessage[lastMessageItem] = message;
     const messages = Object.assign(state.messages, newMessage);

     Object.keys(state.dialogs).forEach((i)=>{
       if(i == state.activeDialog){
         newDialog[i] = {
           id: state.dialogs[i].id,
           users: state.dialogs[i].users,
           messages: [...state.dialogs[i].messages, message.id]
         }
       }else{
         newDialog[i] = state.dialogs[i];
       }
     })
     yield put({type: "SEND_SUCCEEDED", update: {messages: messages, dialogs: newDialog}});
  } catch (e) {
     yield put({type: "SEND_FAILED"});
  }
}


function* mySaga() {
  yield  [
    takeEvery("GET_DIALOGS", fetchDialogs),
    takeEvery("SEND_MESSAGE", sendMessage),
  ];
}

export default mySaga;
