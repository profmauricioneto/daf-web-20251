import React from 'react';

const Child = (props) => {
    return(
        <li>{props.name} - {props.surname}</li>
    );
};

export default Child;