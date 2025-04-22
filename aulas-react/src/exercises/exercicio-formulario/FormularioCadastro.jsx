import React, { useState } from "react";

const Cadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // simulando uma API fake
    const fakeApiCall = (userData) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Dados enviados:', userData);
          resolve({ status: 200 });
        }, 1000);
      });
    };
  
    // Handle do Envio dos dados
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        const response = await fakeApiCall({ name, email, password });
        
        if (response.status === 200) {
          setName('');
          setEmail('');
          setPassword('');
          
          setSuccessMessage('Cadastro realizado com sucesso!');
          setTimeout(() => setSuccessMessage(''), 3000);
        }
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <div className="registration-form">
        <h2>Cadastro de Usuário</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
  
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
  
          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
  
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Cadastrar'}
          </button>
        </form>
  
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
      </div>
);
}

export default Cadastro;