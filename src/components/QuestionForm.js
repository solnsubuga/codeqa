import React from 'react';

const QuestionForm = props => (
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control qn-box"
      placeholder="What's your question"
      aria-label="What's your question"
      aria-describedby="basic-addon2"
    />
    <div className="input-group-append">
      <span className="input-group-text" id="ask-btn">
        Ask
      </span>
    </div>
  </div>
);

export default QuestionForm;
