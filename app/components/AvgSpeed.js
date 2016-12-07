import React from 'react';

export default (props) => {
    let avgSpeed = (props.avgSpeed >= 0) ? Math.floor(props.avgSpeed) : 0;
    return (
        <div>
            <input className="speed-slider" type="range" min="0" max="600" value={avgSpeed}/>
            <p>{avgSpeed}</p>
        </div>
    )

}