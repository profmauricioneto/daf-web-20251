import { useState } from 'react';
import UsuarioForm from './components/UsuarioForm';
import UsuarioList from './components/UsuarioList';
import ProdutoForm from './components/ProdutoForm';
import ProdutoList from './components/ProdutoList';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  const atualizar = () => setRefresh(prev => !prev);

  return (
    <divn className="app-container">
      <h1>Cadastro de Usuários e Produtos</h1>
      <UsuarioForm onUsuarioCriado={atualizar} />
      <UsuarioList atualizarTrigger={refresh} />
      <ProdutoForm onProdutoCriado={atualizar} />
      <ProdutoList atualizarTrigger={refresh} />
    </divn>
  );
}

export default App;