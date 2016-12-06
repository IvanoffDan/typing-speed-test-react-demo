import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchTexts} from '../actions/index';


import TextArea from '../components/TextArea';
import TypingArea from '../components/TypingArea';
import AvgSpeed from '../components/AvgSpeed';
import Completed from '../components/Completed';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            completed: false,
            started: false,
            enteredLetters: 0,
            elapsedSeconds: 0
        };

        this.handleTypingAreaChange = this.handleTypingAreaChange.bind(this);
    }

    /*static contextTypes = {
        router: PropTypes.object
    };*/

    componentWillMount() {
        this.props.fetchTexts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedText.length > 0) {
            this.setState({
                loading: false
            });
        }
    }

    startTimer(){
        this.timer = setInterval(() => {
            let newCount = this.state.elapsedSeconds + 1;
            this.setState({
                elapsedSeconds: newCount
            });
        }, 1000);
    }

    handleTypingAreaChange(typedText) {

        //Start timer when user starts to type
        if (!this.state.started){
            this.setState({started: true});
            this.startTimer();
        }

        let textToType = this.props.selectedText;

        //Render completed component when two texts are equal
        if (typedText == textToType) {
            this.setState({
                completed: true
            })
        }

         if (textToType.startsWith(typedText)){
             this.setState({
                 enteredLetters: typedText.length
             });
             return true;
         } else {
             return false;
         }
    }

    handleCompletion(){
        let avgSpeed = this.state.enteredLetters / this.state.elapsedSeconds * 60;

        clearInterval(this.timer);
        this.timer = undefined;

        return (
            <div>
                <Completed avgSpeed = {avgSpeed}/>
            </div>
        )
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else if (this.state.completed) {
            return (
                <div>
                    {this.handleCompletion()}
                </div>
            )
        } else {
            return (
                <div>
                    <TextArea textToType={this.props.selectedText}/>
                    <AvgSpeed avgSpeed = {this.state.enteredLetters / this.state.elapsedSeconds * 60}/>
                    <TypingArea onTyping={this.handleTypingAreaChange}/>
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
