import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Inicio from './componentes/pages/Inicio';
import Gestion from './componentes/pages/Gestion';
import PaginaPrincipal from './componentes/pages/PaginaPrincipal';
import GestionTareasSinAsignar from './componentes/pages/GestionTareasSinAsignar';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);


// root.render(
  
//     <GestionTareasSinAsignar />
  
// );


