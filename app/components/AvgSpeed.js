import React from 'react';

export default (props) => {
    let avgSpeed = (props.avgSpeed >= 0) ? Math.floor(props.avgSpeed) : 0;
    return (
        <div className="speed-slider-container col-sm-6 offset-sm-3">
            <input className="speed-slider" type="range" min="0" max="600" value={avgSpeed}/>
            <p className="avg-speed">{avgSpeed  < 1000 ? avgSpeed : "Are you cheating?" }</p>
        </div>
    )

}