import React from 'react';

import Header from './Header';

import AuthForm from './AuthForm';

class Login extends React.Component {
  render() {
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
                    <AuthForm signup={true} />
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
