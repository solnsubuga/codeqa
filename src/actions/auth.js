import { USER_LOGGED_IN, USER_LOGIN_FAILURE } from '../constants';
import axios from 'axios';

const userLogged = data => ({
  data,
  type: USER_LOGGED_IN
});

const userLoginFailure = data => ({
  data,
  type: USER_LOGIN_FAILURE
});

export const loginUser = data => dispatch =>
  axios
    .post('/auth/signin/', data)
    .then(res => dispatch(userLogged(res.data)))
    .catch(error => dispatch(userLoginFailure(error.response.data)));
