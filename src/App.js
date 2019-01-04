import React, { Component } from 'react';

import Header from './components/Header';
import QuestionForm from './components/QuestionForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container app-container">
          <QuestionForm />
        </div>
      </div>
    );
  }
}

export default App;
