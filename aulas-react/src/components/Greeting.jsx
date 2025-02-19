import 'react';

export const Greeting = (props) => {
    return (
        <div>
            <h2>Greeting Mr(s) {props.name}</h2>
            <p>This is my first component with props</p>
        </div>
    );
};

export default Greeting;