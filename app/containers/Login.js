import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {tryLogin, checkIfLoggedIn} from '../actions/index';

class Login extends Component {
    constructor(props) {
        super(props)
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.checkIfLoggedIn();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.loggedIn) {
            this.context.router.push('/main');
            return false;
        } else
            return true;
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = this.refs.email.value;
        const pass = this.refs.pass.value;

        this.props.tryLogin(email, pass);

    }

    render() {

        if (this.props.loggedIn) {
            this.context.router.push('/main');
        }

        return (
            <div className="login-form" id="login-form">
                <div className="loginmodal-container">
                    <h1>Typing Speed Test</h1><br/>

                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text" name="user" placeholder="Email" ref="email"/>
                        <small id="emailHelp" className="form-text text-muted">Hint: test@example.com</small>
                        <input type="password" name="pass" placeholder="Password" ref="pass"/>
                        <small id="passHelp" className="form-text text-muted">Hint: 12345</small>
                        <input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.user.loggedIn
    }
}

export default  connect(mapStateToProps, {tryLogin, checkIfLoggedIn})(Login);