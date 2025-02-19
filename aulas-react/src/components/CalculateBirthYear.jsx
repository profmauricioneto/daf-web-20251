import 'react';

const CalculateBirthYear = (props) => {
    const currentYear = new Date().getFullYear();
    const age = props.age;
    const birthYear = currentYear-age;
    return (
        <div>
            <h2>Your Age is {age}</h2>
            <h3>Your birth year is {birthYear}</h3>
        </div>
    );
};

export default CalculateBirthYear;