import React from 'react';
import {Link} from 'react-router';

export default class Completed extends React.Component{

    onTryAgain(e) {
        e.preventDefault();
        this.props.onTryAgain();
    }

    render(){
        return (
            <div>
                <p>Congrats! You have completed achieved an average typing speed of {Math.floor(this.props.avgSpeed)} letters per
                    minute!</p>
                <button className="btn btn-default" onClick={this.onTryAgain.bind(this)}>Try again</button>
            </div>
        )
    }
}