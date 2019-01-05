import React, { Component } from 'react';

import { Header, QuestionForm, Questions } from './components';

class App extends Component {
  state = {
    questions: [
      {
        title: 'Can I use ES2016 features yet in the browser?',
        id: 1,
        asked: 'Asked Jan, 4th 2019'
      },
      {
        title: 'How does someone learn Javascript?',
        id: 2,
        asked: 'Asked Jan, 5th 2019'
      }
    ]
  };

  handleAddQuestion = qn => {
    this.setState(prevState => ({
      questions: [
        {
          title: qn,
          id: Math.random(),
          asked: 'Asked Jan, 5th 2019'
        },
        ...prevState.questions
      ]
    }));
  };

  render() {
    const { questions } = this.state;
    return (
      <div>
        <Header />
        <div className="container app-container">
          <div className="container">
            <QuestionForm handleAddQuestion={this.handleAddQuestion} />
            <Questions questions={questions} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
