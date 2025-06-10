import { useEffect, useState } from 'react';
import application from '../services/application';
import './UsuarioList.css';

export default function UsuarioList({ atualizarTrigger }) {
  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    application.get('/usuarios')
      .then(res => setUsuarios(res.data))
      .catch(() => setErro('Erro ao carregar usuários.'));
  }, [atualizarTrigger]);

  return (
    <div>
      <h3>Lista de Clientes</h3>
      {erro && <div style={{ color: 'red' }}>{erro}</div>}
      <ul>
        {usuarios.map(c => (
          <li key={c.id || c._id}>{c.nome} ({c.cpf})</li>
        ))}
      </ul>
    </div>
  );
}