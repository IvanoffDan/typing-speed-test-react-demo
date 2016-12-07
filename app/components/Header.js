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
            <div>
                <p>Hello {this.props.username}!</p>
                <button type="submit" onClick={this.onSubmit.bind(this)}>Log out</button>
            </div>
        )
    }
}