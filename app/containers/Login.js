import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {tryLogin} from '../actions/index';

class Login extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = this.refs.email.value;
        const pass = this.refs.pass.value;

        this.props.tryLogin(email, pass);

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email"
                                   ref="email"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"
                                   ref="pass"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        loggedIn: state.user.loggedIn
    }
}

export default  connect(mapStateToProps, {tryLogin})(Login);