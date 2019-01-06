import React from 'react';
import Header from './Header';
import Question from './Question'
import { comment } from 'postcss-selector-parser';
import SingleAnswer from './SingleAnswer';
import AnswerForm from './AnswerForm';


class SingleQuestion extends React.Component {
  state = {
    question: [
      {
        title: 'Can I use ES2016 features yet in the browser?',
        id: 1,
        asked: 'Asked Jan, 4th 2019',
        answers: [
          {
            id: 1,
            votes: 1,
            answer: "This is an answer"
          }
        ]
      },
      {
        title: 'Can I use ES2016 features yet in the browser?',
        id: 1,
        asked: 'Asked Jan, 4th 2019',
        answers: [
          {
            id: 1,
            votes: 1,
            answer: "This is an answer"
          }
        ]
      },
    ]
  }



  render() {
    return (
      <div>
        <Header />
        <div className="container" />

        <div className="qn-title">
          <h1>This is a question title?</h1>
          <hr className="line"></hr>

        </div>
        <SingleAnswer />
        <hr className="ans-line"></hr>
        <AnswerForm />
      </div >


    )
  }
}



export default SingleQuestion;
