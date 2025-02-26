import React from 'react';
import './User.css'

const User = ({name, age}) => {
    return (
        <div>
            <h3>Name: {name} - age: {age}</h3>
        </div>
    );
};

export default User;