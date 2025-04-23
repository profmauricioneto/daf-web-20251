import React from 'react';

const Element = (props) => {
    return(
        <React.Fragment>
            <div>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
        </React.Fragment>
    );
}

export default Element;