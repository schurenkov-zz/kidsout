const initialState = {
  currenUser: false,
  users: false,
  dialogs: false,
  messages: false,
  activeDialog: 1
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DIALOG_FETCH_SUCCEEDED':
      return Object.assign({}, state, action.dialogs);
    case 'ACTIVE_DIALOG':
      return Object.assign({}, state, {activeDialog: action.id});
    case 'SEND_SUCCEEDED' :
      return Object.assign({}, state, {dialogs: action.update.dialogs, messages: action.update.messages});
    default:
      return state;
  }
}

export default mainReducer;
