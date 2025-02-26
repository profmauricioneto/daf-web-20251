import React from 'react';
import User from './User'

const UserList = () => {
    const users = [
        {name: 'mauricio', age: 35},
        {name: 'rafael', age: 22},
        {name: 'maria', age: 20},
        {name: 'adolfo', age: 45},
    ];

    return (
        <>
            {users.map((user, index) => (
                <User key={index} name={user.name} age={user.age} />
                )
            )}
        </>
    );
};

export default UserList;