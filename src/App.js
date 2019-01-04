import React, { Component } from 'react';

import { Header, QuestionForm, Questions } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container app-container">
          <div className="container">
            <QuestionForm />
            <Questions />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
