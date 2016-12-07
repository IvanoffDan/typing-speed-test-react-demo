import React from 'react';

export default (props) => {
    return(
        <div>
            <p>Congrats! You have completed achieved an average typing speed of {Math.floor(props.avgSpeed)} letters per minute!</p>
        </div>
    )
}