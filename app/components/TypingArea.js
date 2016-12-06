import React from 'react';

class TypingArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            toggleBackground: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let typedText = event.target.value;
        this.setState(
            this.props.onTyping(typedText) ? {
                    value: typedText,
                    toggleBackground: false
                } : {
                value: typedText.slice(0, -1),
                toggleBackground: true
            }
        );
    }

    render() {
        return (
            <div>
                <textarea name="typing-area"
                          id="typing-area"
                          cols="30" rows="10"
                          value={this.state.value}
                          placeholder="Start typing text from the form above when ready."
                          onChange={this.handleChange}
                          ref="typing-area">
                </textarea>
            </div>
        );
    }
}

export default TypingArea;