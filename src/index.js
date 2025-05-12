import React from 'react';
import ReactDOM from 'react-dom/client';

import Saudacao from "./components/Saudacao";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Saudacao tipo='Bom dia' nome='Jão' />
  </React.StrictMode>
);
