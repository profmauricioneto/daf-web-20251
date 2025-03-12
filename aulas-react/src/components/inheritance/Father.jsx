import React from 'react';
import Child from './Child';

const Father = (props) => {
    return(
        <>
            <h2>Father: {props.name} - {props.surname}</h2>
            <p>Lista de Filhos</p>
            <ul>
                <Child name="Mauricio" surname={props.surname}/>
                <Child name="Joãozinho" surname={props.surname}/>
                <Child name="Mariazinha" surname={props.surname}/>
                <Child {...props} />
                <Child {...props} name="Israel"/>
            </ul>
        </>
    );
}

export default Father;