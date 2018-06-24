const GOT_USERS = 'GOT_USERS';
const GOT_NEW_USER = 'GOT_NEW_USER';

export const gotUsers = users => ({ type: GOT_USERS, users });
export const gotNewUser = user => ({ type: GOT_NEW_USER, user });

const reducer = (state = [], action) => {
  switch (action.type) {
  case GOT_USERS:
    return action.users;
  case GOT_NEW_USER:
    if(!state.find(user => user.id === action.user.id)) {
      return [...state, action.user];
    } else {
      return state;
    }
  default:
    return state;
  }
};

export default reducer;
