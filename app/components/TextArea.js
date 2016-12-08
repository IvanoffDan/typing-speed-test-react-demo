import React from 'react';

export default (props) => {

    function renderText(){
        let textToBeHighlighted = props.textToType.slice(0, props.typedLength);
        let theRest = props.textToType.slice(props.typedLength);

        console.log(textToBeHighlighted);
        console.log(theRest);

        return (
            <p>
                <span className="text-to-highlight">{textToBeHighlighted}</span>
                {theRest}
            </p>
        );
    }

    return(
        <div className="text-to-type col-lg-6 offset-lg-3">
            {renderText()}
        </div>
    )
}