import { useEffect, useState } from 'react';
import api from '../services/application';
import './ProdutoList.css';

export default function ProdutoList({ atualizarTrigger }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/produtos').then(res => setProdutos(res.data));
  }, [atualizarTrigger]);

  return (
    <div className="produto-list">
      <h3>Lista de Produtos</h3>
      <ul>
        {produtos.map(p => (
          <li key={p.id || p._id}>
            <strong>{p.nome}</strong> - {p.descricao} <br />
            R${Number(p.preco).toFixed(2)} (Usuário ID: {p.clienteId || p.usuarioId})
          </li>
        ))}
      </ul>
    </div>
  );
}