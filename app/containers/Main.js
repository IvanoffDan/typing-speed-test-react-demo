import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchTexts, tryLogout, checkIfLoggedIn} from '../actions/index';
import _ from 'lodash';


import TextArea from '../components/TextArea';
import TypingArea from '../components/TypingArea';
import AvgSpeed from '../components/AvgSpeed';
import Completed from '../components/Completed';
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
        this.props.fetchTexts();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }


    componentWillReceiveProps(nextProps) {
        if (!_.isEmpty(nextProps.texts)) {
            let textIdToSelect = Math.floor((Math.random() * 3) + 1);
            this.setState({
                selectedText: nextProps.texts[textIdToSelect],
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
        this.setState(INITIAL_STATE);
        console.log(this.state);
        this.props.tryLogout();
    }

    handleTryAgain(){
        this.setState({
            completed: false
        })
    }


    handleCompletion() {
        let avgSpeed = this.state.enteredLetters / this.state.elapsedSeconds * 60;

        clearInterval(this.timer);
        this.timer = undefined;

        return (
            <div>
                <Completed avgSpeed={avgSpeed} onTryAgain = {this.handleTryAgain.bind(this)}/>
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
                    <Header username={this.props.username} onLogout={this.handleLogout.bind(this)}/>
                    <TextArea textToType={this.state.selectedText}/>
                    <AvgSpeed avgSpeed={this.state.enteredLetters / this.state.elapsedSeconds * 60}/>
                    <TypingArea onTyping={this.handleTypingAreaChange}/>
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        texts: state.texts.all,
        username: state.user.username
    }
}

export default connect(mapStateToProps, {fetchTexts, tryLogout, checkIfLoggedIn})(Main);
