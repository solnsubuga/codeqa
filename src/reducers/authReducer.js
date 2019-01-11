import { USER_LOGGED_IN, USER_LOGIN_FAILURE } from '../constants';

const initialState = {
  user: {},
  errors: {}
};

const authReducer = function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        user: action.data.user
      };
    case USER_LOGIN_FAILURE: {
      return {
        ...state,
        errors: action.data.errors
      };
    }
    default:
      return state;
  }
};

export default authReducer;
