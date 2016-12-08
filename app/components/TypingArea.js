import React from 'react';

class TypingArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            typingAreaClass: "correct-input"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let typedText = event.target.value;
        this.setState(
            this.props.onTyping(typedText) ? {
                value: typedText,
                typingAreaClass: "correct-input"
            } : {
                value: typedText.slice(0, -1),
                typingAreaClass: "incorrect-input"
            }
        );
    }

    render() {
        return (
            <div>
                <textarea className={this.state.typingAreaClass + "typing-area col-sm-8 offset-sm-2 col-xs-12"}
                          name="typing-area"
                          id="typing-area"
                          cols="30" rows="10"
                          value={this.state.value}
                          placeholder="Start typing text from the form above when ready."
                          onChange={this.handleChange}
                          ref="typingArea">
                </textarea>
            </div>
        );
    }
}

export default TypingArea;