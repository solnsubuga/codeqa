import React from 'react';
import QuestionProfile from '../images/question-profile.png';

const Question = props => (
  <div className="row">
    <img
      className="question__profile rounded-circle"
      src={QuestionProfile}
      alt=""
    />
    <div className="question__title">
      <a className="question__link" href="/">
        Can I use ES2016 features yet in the browser?
      </a>
      <p align="left" className="question__date">
        Asked Jan, 4th 2019{' '}
      </p>
    </div>
  </div>
);

export default Question;
