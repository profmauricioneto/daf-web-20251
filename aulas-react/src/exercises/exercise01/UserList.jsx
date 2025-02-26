import React from 'react';
import User from './User';

const UserList = () => {
    const users = [
        {name: 'mauricio', age: 35},
        {name: 'joao', age: 18},
        {name: 'maria', age: 24}
    ];
    return (
        <div>
            {users.map((user, index) => (
                <User key={index} name={user.name} age={user.age} />
            ))}
        </div>
    );
};

export default UserList;