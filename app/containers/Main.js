import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchText, tryLogout, checkIfLoggedIn, setResult, clearText} from '../actions/index';
import _ from 'lodash';
import Spinner from 'react-spinkit';


import TextArea from '../components/TextArea';
import TypingArea from '../components/TypingArea';
import AvgSpeed from '../components/AvgSpeed';
import Header from '../components/Header';

const INITIAL_STATE = {
    loading: true,
    selectedText: undefined,
    completed: false,
    started: false,
    enteredLetters: 0,
    elapsedSeconds: 0
};

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;

        this.handleTypingAreaChange = this.handleTypingAreaChange.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.checkIfLoggedIn();
    }

    componentDidMount(){
        this.props.fetchText();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
        this.props.clearText();
    }


    componentWillReceiveProps(nextProps) {

        if (!_.isEmpty(nextProps.text)) {
            this.setState({
                selectedText: nextProps.text,
                loading: false
            });
        }

        if (nextProps.username == "") {
            this.context.router.push('/');
        }

    }

    startTimer() {
        this.timer = setInterval(() => {
            let newCount = this.state.elapsedSeconds + 1;
            this.setState({
                elapsedSeconds: newCount
            });
        }, 1000);
    }

    handleTypingAreaChange(typedText) {

        //Start timer when user starts to type
        if (!this.state.started) {
            this.setState({started: true});
            this.startTimer();
        }

        let textToType = this.state.selectedText;

        //Render completed component when two texts are equal
        if (typedText == textToType) {
            this.setState({
                completed: true
            })
        }

        if (textToType.startsWith(typedText)) {
            this.setState({
                enteredLetters: typedText.length
            });
            return true;
        } else {
            return false;
        }
    }

    handleLogout() {
        this.props.tryLogout();
    }

    handleCompletion() {
        let avgSpeed = this.state.enteredLetters / this.state.elapsedSeconds * 60;
        this.props.setResult(avgSpeed);
        this.context.router.push('/completed');
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="spinner-box">
                    <Spinner spinnerName="rotating-plane" overrideSpinnerClassName="spinner" noFadeIn/>
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
                    <Header username={this.props.username} onLogout={this.handleLogout.bind(this)}/>
                    <TextArea textToType={this.state.selectedText} typedLength={this.state.enteredLetters}/>
                    <AvgSpeed avgSpeed={this.state.enteredLetters / (this.state.elapsedSeconds > 0 ? this.state.elapsedSeconds : 1 ) * 60}/>
                    <TypingArea onTyping={this.handleTypingAreaChange}/>
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        text: state.text,
        username: state.user.username
    }
}

export default connect(mapStateToProps, {fetchText, tryLogout, checkIfLoggedIn, setResult, clearText})(Main);
