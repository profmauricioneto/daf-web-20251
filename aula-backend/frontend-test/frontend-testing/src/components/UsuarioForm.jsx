import { useState } from 'react';
import application from '../services/application';
import './UsuarioForm.css';

export default function UsuarioForm({ onUsuarioCriado }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [erro, setErro] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await application.post('/usuarios', { nome, cpf });
      setNome('');
      setCpf('');
      setErro(null);
      if (onUsuarioCriado) onUsuarioCriado();
    } catch (error) {
      setErro('Erro ao cadastrar usuário.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Cadastrar Usuarios</h3>
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required />
      <input value={cpf} onChange={e => setCpf(e.target.value)} placeholder="CPF" required />
      <button type="submit">Salvar</button>
      {erro && <div style={{ color: 'red' }}>{erro}</div>}
    </form>
  );
}