import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cadastro from './exercises/exercicio-formulario/FormularioCadastro';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cadastro />
  </StrictMode>,
)
