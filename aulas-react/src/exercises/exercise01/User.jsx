import React from 'react';

const User = (props) => {
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
        </div>
    )
};

export default User;