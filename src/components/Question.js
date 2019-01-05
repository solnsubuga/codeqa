import React from 'react';
import Proptypes from 'prop-types';

import QuestionProfile from '../images/question-profile.png';

const Question = props => (
  <div className="question">
    <div className="row">
      <img
        className="question__profile rounded-circle"
        src={QuestionProfile}
        alt=""
      />
      <div className="question__title">
        <a className="question__link" href="/">
          {props.title}
        </a>
        <p className="question__date float-right">{props.asked} </p>
      </div>
    </div>
    <hr />
  </div>
);

Question.propTypes = {
  title: Proptypes.string.isRequired,
  asked: Proptypes.string.isRequired
};
export default Question;
