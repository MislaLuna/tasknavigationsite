import React from 'react';

const GestaoUsuario = () => {
  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Controle de Usuários</h1>

      <div className="flex justify-between items-center mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          + ADICIONAR
        </button>
      </div>

      <table className="w-full table-auto border-collapse shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Status</th>
            <th className="p-2">Nome</th>
            <th className="p-2">Grupo</th>
            <th className="p-2">Perfil</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-green-600 font-bold p-2">ATIVO</td>
            <td className="p-2">Caminho Luz</td>
            <td className="p-2">Equipe de Enfermagem</td>
            <td className="p-2">Enfermeira e Médico</td>
          </tr>
          <tr>
            <td className="text-green-600 font-bold p-2">ATIVO</td>
            <td className="p-2">Fernanda G. de Sousa</td>
            <td className="p-2">Master</td>
            <td className="p-2">Master</td>
          </tr>
          <tr>
            <td className="text-green-600 font-bold p-2">ATIVO</td>
            <td className="p-2">Luana Silva</td>
            <td className="p-2">Equipe de Enfermagem</td>
            <td className="p-2">Auxiliar de Enfermagem</td>
          </tr>
          <tr>
            <td className="text-red-600 font-bold p-2">INATIVO</td>
            <td className="p-2">Márcio P. Santos</td>
            <td className="p-2">Equipe de Enfermagem</td>
            <td className="p-2">Auxiliar de Enfermagem</td>
          </tr>
          {/* Adicione os outros usuários aqui */}
        </tbody>
      </table>
    </div>
  );
};

export default GestaoUsuario;
