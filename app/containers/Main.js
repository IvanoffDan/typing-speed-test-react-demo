import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTexts} from '../actions/index';


import TextArea from '../components/TextArea';
import TypingArea from '../components/TypingArea';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedText: '',
            loading: true
        };

        this.handleTypingAreaChange = this.handleTypingAreaChange.bind(this);
    }

    componentWillMount() {
        this.props.fetchTexts();
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.selectedText.length > 0){
            this.setState({
               loading: false
            });
        }
    }

    handleTypingAreaChange(typedText){
        let textToType = this.props.selectedText;
            return !!textToType.startsWith(typedText)
    }

    render(){
        if (this.state.loading) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div>
                    <TextArea textToType={this.props.selectedText}/>
                    <TypingArea onTyping = {this.handleTypingAreaChange}/>
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        texts: state.texts.all,
        selectedText: state.texts.selectedText
    }
}

export default connect(mapStateToProps, {fetchTexts})(Main);
