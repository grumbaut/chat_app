const GOT_MESSAGES = 'GOT_MESSAGES';
const GOT_NEW_MESSAGE = 'GOT_NEW_MESSAGE';

export const gotMessages = messages => ({ type: GOT_MESSAGES, messages });
export const gotNewMessage = message => ({ type: GOT_NEW_MESSAGE, message });

const reducer = (state = [], action) => {
  switch (action.type) {
  case GOT_MESSAGES:
    return action.messages ? action.messages : [];
  case GOT_NEW_MESSAGE:
    return [action.message, ...state];
  default:
    return state;
  }
};

export default reducer;
