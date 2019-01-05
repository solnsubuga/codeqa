import React from 'react';
import Proptypes from 'prop-types';

class QuestionForm extends React.Component {
  state = {
    question: ''
  };

  onChange = evt => this.setState({ question: evt.target.value });

  Submit = evt => {
    evt.preventDefault();
    this.props.handleAddQuestion(this.state.question);
    this.setState({ question: '' });
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control qn-box"
          placeholder="What's your question"
          aria-label="What's your question"
          aria-describedby="basic-addon2"
          value={this.state.question}
          onChange={this.onChange}
        />
        <div className="input-group-append">
          <span onClick={this.Submit} className="input-group-text" id="ask-btn">
            Ask
          </span>
        </div>
      </div>
    );
  }
}

QuestionForm.propTypes = {
  handleAddQuestion: Proptypes.func.isRequired
};

export default QuestionForm;
