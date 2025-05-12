import React from 'react';
import ReactDOM from 'react-dom/client';

import Pai from './components/Pai';
import Filho from './components/Filho';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pai nome='Jão' sobrenome='Bosco'>
      <Filho nome='Pedro' sobrenome='Bosco' />
      <Filho nome='Jão' sobrenome='Bosco' />
      <Filho nome='Carla' sobrenome='Bosco' />
    </Pai>
  </React.StrictMode>
);
