import { BrowserRouter, Routes, Route } from "react-router-dom";

import GestaoUsuario from '../src/components/GestaoUsuario';


function RoutesApp () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/gestaodepartamento" element={<GestaoDepartamento />} />
        {/* Adicione mais rotas aqui */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
