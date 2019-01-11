import React from 'react';
import validator from 'validator';
import { loginUser } from '../actions/auth';
import { connect } from 'react-redux';

class AuthForm extends React.Component {
  state = {
    username: '',
    password: '',
    errors: {}
  };

  onChange = evt => this.setState({ [evt.target.name]: evt.target.value });

  formSubmit = async evt => {
    evt.preventDefault();
    if (this.props.signup) {
      console.log('Signing up user');
      return;
    } else {
      // login user
      const { username, password } = this.state;
      const errors = this.validate(username, password);

      if (Object.keys(errors).length === 0) {
        const data = {
          username,
          password
        };
        await this.props.loginUser(data).then(() => {
          console.log(this.props.user);
          this.setState(prevState => ({
            errors: this.props.errors
          }));
        });
      } else {
        this.setState(prevState => ({
          errors: errors
        }));
      }
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
      <form onSubmit={this.formSubmit}>
        {errors.detail && (
          <div className="alert alert-danger">{errors.detail}</div>
        )}
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          {errors.username && <p className="has-error">{errors.username}</p>}
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
          {errors.password && <p className="has-error">{errors.password}</p>}
        </div>

        {this.props.signup && (
          <div className="form-group">
            <label htmlFor="">Your Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            {errors.name && <p className="has-error">{errors.name}</p>}
          </div>
        )}
        <input
          type="submit"
          className="btn btn-light btn-login"
          value={this.props.signup ? 'Sign  Up' : 'Log In'}
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  errors: state.authReducer.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(AuthForm);
