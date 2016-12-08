import React from 'react';

export default (props) => {
    let avgSpeed = (props.avgSpeed >= 0) ? Math.floor(props.avgSpeed) : 0;
    return (
        <div className="speed-slider-container col-xs-8 offset-xs-2 col-lg-6 offset-lg-3">
            <input className="speed-slider" type="range" min="0" max="600" value={avgSpeed}/>
            <p className="avg-speed">{avgSpeed  < 1000 ? `${avgSpeed} cps`: "Are you cheating?" }</p>
        </div>
    )

}