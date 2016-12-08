import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onLogout();
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-faded">
                <Link to="/main"> <h1 className="navbar-brand mb-0">Typing Speed Test</h1></Link>
                <div className="float-xs-right">
                    <span id="username">Hi {this.props.username}!</span>
                    <button className="btn btn-info" type="submit" onClick={this.onSubmit.bind(this)}>Log out</button>
                </div>
            </nav>
        )
    }
}