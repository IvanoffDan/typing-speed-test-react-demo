import React from 'react';

export default (props) => {
    return(
        <div className="text-to-type col-md-6 offset-md-3 col-sm-8 offset-sm-2">
            <p>{props.textToType}</p>
        </div>
    )
}