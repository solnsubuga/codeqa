import React from 'react';
import validator from 'validator';
import axios from 'axios';

import Header from './Header';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    errors: {}
  };

  onChange = evt => this.setState({ [evt.target.name]: evt.target.value });

  formSubmit = async evt => {
    evt.preventDefault();
    const { username, password } = this.state;
    const errors = this.validate(username, password);

    if (Object.keys(errors).length === 0) {
      const data = {
        username,
        password
      };

      await axios
        .post('/auth/signin/', data)
        .then(res => {
          //Login is successful save the token to localStorage or Cookies
          localStorage.setItem('token', res.data.user.token);

          this.props.history.push('/');
        })
        .catch(error => {
          this.setState(prevState => ({
            errors: error.response.data.errors
          }));
        });
    } else {
      this.setState(prevState => ({
        errors: errors
      }));
    }
  };

  validate = (username, password) => {
    const errors = {};
    if (validator.isEmpty(username)) {
      errors.username = 'username is required';
    }

    if (validator.isEmpty(password)) {
      errors.password = 'password is required';
    }

    return errors;
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Header />
        <div className="container app-container">
          <div className="container">
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6 ">
                <div className="card">
                  <div className="card-body">
                    {errors.detail && (
                      <div className="alert alert-danger">{errors.detail}</div>
                    )}
                    <form onSubmit={this.formSubmit}>
                      <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input
                          className="form-control"
                          type="text"
                          name="username"
                          value={this.state.username}
                          onChange={this.onChange}
                        />
                        {errors.username && (
                          <p className="has-error">{errors.username}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                        {errors.password && (
                          <p className="has-error">{errors.password}</p>
                        )}
                      </div>
                      <input
                        type="submit"
                        className="btn btn-light btn-login"
                        value="Log In"
                      />
                    </form>
                  </div>
                </div>
                <div className="col-md-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
