import React from 'react';

import Question from './Question';

const Questions = props => (
  <div className="questions">
    <h1>Top Questions</h1>
    <hr
      style={{
        border: 'none',
        height: '4px',
        backgroundColor: '#eee'
      }}
    />
    {props.questions.map(qn => (
      <Question id={qn.id} key={qn.id} title={qn.title} asked={qn.asked} />
    ))}
  </div>
);

export default Questions;
