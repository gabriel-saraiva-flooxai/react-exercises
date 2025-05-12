import React from 'react';
import ReactDOM from 'react-dom/client';

import Multi, { BoaNoite } from "./components/Multiplos";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Multi.BoaTarde name='Jão' />
    <BoaNoite name='Filhote' />
  </React.StrictMode>
);
