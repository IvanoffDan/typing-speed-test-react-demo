import React from 'react';

export default class Header extends React.Component {

    constructor(props){
        super(props)
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onLogout();
    }

    render() {
        return(
        <nav className="navbar navbar-light bg-faded">
            <h1 className="navbar-brand mb-0">Typing Speed Test</h1>
            <div className="float-xs-right">
                <button className="btn btn-info" type="submit" onClick={this.onSubmit.bind(this)}>Log out</button>
            </div>
        </nav>
        )
    }
}