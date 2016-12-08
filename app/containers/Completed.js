import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {} from '../actions/index';
import {Link} from 'react-router';
import _ from 'lodash';

class Completed extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        if (!_.isNumber(this.props.result)) {
            console.log(this.props.result);
            this.context.router.push('/');
        }

    }

    render() {
        return (
            <div className="completed">
                <h1>Congratulations!</h1>
                <p> You have achieved an average typing speed of <strong>{Math.floor(this.props.result)}</strong> characters per minute!</p>
                <Link to="/main" className="btn btn-primary" id="try-again-button">Try again</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {result: state.user.results[0]}
}

export default connect(mapStateToProps)(Completed);