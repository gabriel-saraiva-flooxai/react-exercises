import React from 'react';
import ReactDOM from 'react-dom/client';

import BomDia from './components/BomDia';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BomDia nome='Jão' idade={15} />
  </React.StrictMode>
);
