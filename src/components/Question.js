import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        <Link
          className="question__link"
          to={`question/${props.id}`}
          href={`question/${props.id}`}
        >
          {props.title}
        </Link>
        <p className="question__date float-right">{props.asked} </p>
      </div>
    </div>
    <hr />
  </div>
);

Question.propTypes = {
  title: Proptypes.string.isRequired,
  asked: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired
};
export default Question;
