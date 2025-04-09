import React, { useEffect, useState } from "react";
import axios from "axios";

const UserTable = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [filtros, setFiltros] = useState({
    nome: "",
    email: "",
    status: "",
    nivel: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/usuarios") // Troque a URL se for diferente
      .then((res) => {
        setUsuarios(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar usuários:", err);
      });
  }, []);

  const handleFiltro = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const usuariosFiltrados = usuarios.filter((user) => {
    return (
      user.nome.toLowerCase().includes(filtros.nome.toLowerCase()) &&
      user.email.toLowerCase().includes(filtros.email.toLowerCase()) &&
      (filtros.status === "" || user.status.toLowerCase() === filtros.status.toLowerCase()) &&
      (filtros.nivel === "" || user.nivel.toLowerCase() === filtros.nivel.toLowerCase())
    );
  });

  return (
    <div className="usuarios-container">
      <h1>Gestão de Usuários</h1>
      <p>Visualização e gerenciamento de todos os usuários cadastrados</p>

      <div className="filtros">
        <input
          type="text"
          name="nome"
          placeholder="Buscar por nome"
          value={filtros.nome}
          onChange={handleFiltro}
        />
        <input
          type="text"
          name="email"
          placeholder="Buscar por e-mail"
          value={filtros.email}
          onChange={handleFiltro}
        />
        <select name="status" value={filtros.status} onChange={handleFiltro}>
          <option value="">Status</option>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
        <select name="nivel" value={filtros.nivel} onChange={handleFiltro}>
          <option value="">Nível</option>
          <option value="admin">Admin</option>
          <option value="usuario">Usuário</option>
        </select>
      </div>

      <table className="tabela-usuarios">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Status</th>
            <th>Nível</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((user) => (
            <tr key={user.id}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>{user.nivel}</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
