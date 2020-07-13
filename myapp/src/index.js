import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PanelIzquierdo from './componentes/panelIzquierdo';
import PanelDerecho from './componentes/panelDerecho';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <PanelIzquierdo/>
    <PanelDerecho/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
