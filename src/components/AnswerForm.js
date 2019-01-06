import React from 'react'

class AnswerForm extends React.Component {
    state = {
        answer: ""
    }

    onChange = evt => this.setState({ answer: evt.target.value });

    render() {
        return (
            <div className="form-group">
                <label for="comment">Add an answer</label>
                <textarea className="form-control" rows="5" id="comment" placeholder="Jot your answer here" value={this.state.answer} onChange={this.onChange}></textarea>
                <button type="button" className="btn btn-success">Post answer</button>
            </div>
        );
    }
};


export default AnswerForm;