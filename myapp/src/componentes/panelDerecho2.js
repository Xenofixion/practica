import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './panelDerecho2.css';
import PanelDerecho from './panelDerecho';
import PanelIzquierdo from './panelIzquierdo';

const MiComponente = () => {
    return (
    <div className='MiComponente'>HOLA</div>
    );
}

const PanelDerecho2 = () => {
    return (
        <BrowserRouter>
            <Route path='/hola' render={MiComponente}></Route>
            <Route path='/Adios' render={PanelDerecho}></Route>
        </BrowserRouter>
    );
}

export default PanelDerecho2;