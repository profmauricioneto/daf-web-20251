import React, { useState } from 'react';

const Formulario = () => {
    
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || age === 0) {
            setErrorMessage('Preencha os campos do formulário!');
            return;
        }
        alert('dados enviados com sucesso');
        console.log('username: ' + username + ' age: ' + age);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">
                    Username: <input 
                        type="text"
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value) }/>
                    </label>
                </div>
                <div>
                    <label htmlFor="age">
                    Age: <input 
                        type="number"
                        id='age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)} />
                    </label>
                </div>
                <button type='submit'>Enviar Dados</button>
                {errorMessage && ( <p>{errorMessage}</p>)}
            </form>

        </React.Fragment>
    );
}

export default Formulario;

