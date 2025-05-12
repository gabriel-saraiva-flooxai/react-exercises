import React from 'react';
import ReactDOM from 'react-dom/client';

import Pai from './components/Pai';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pai nome='Jão' sobrenome='Bosco'>
      {/* Como passa os componentes FILHOS aqui? */}
    </Pai>
  </React.StrictMode>
);
