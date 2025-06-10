import { useState, useEffect } from "react";
import application from "../services/application";
import "./ProdutoForm.css";

export default function ProdutoForm({ onProdutoCriado }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [usuarioId, setUsuarioId] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    application.get("/usuarios").then((res) => setUsuarios(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await application.post("/produtos", {
      nome,
      descricao,
      preco: parseFloat(preco),
      usuarioId: Number(usuarioId),
    });
    setNome("");
    setDescricao("");
    setPreco("");
    setUsuarioId("");
    onProdutoCriado();
  };

  return (
    <form className="produto-form" onSubmit={handleSubmit}>
      <h3>Cadastrar Produto</h3>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do produto"
        required
      />
      <input
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
        required
      />
      <input
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        type="number"
        placeholder="Preço"
        required
      />
      <select
        value={usuarioId}
        onChange={(e) => setUsuarioId(e.target.value)}
        required
      >
        <option value="">Selecione um Usuario</option>
        {usuarios.map((c) => (
          <option key={c.id || c._id} value={c.id || c._id}>
            {c.nome}
          </option>
        ))}
      </select>
      <button type="submit">Salvar</button>
    </form>
  );
}
