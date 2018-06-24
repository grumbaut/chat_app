const GOT_USER = 'GOT_USER';

export const gotUser = user => ({ type: GOT_USER, user });

const reducer = (state = {}, action) => {
  switch (action.type) {
  case GOT_USER:
    return action.user;
  default:
    return state;
  }
};

export default reducer;
