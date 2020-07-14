import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './panelDerecho2.css';

const MiComponente = () => (
    <div className='MiComponente'>HOLA</div>  
)

const PanelDerecho2 = () => {
    return (
        <BrowserRouter>
            <Route path='/hola' component={MiComponente}></Route>
        </BrowserRouter>
    );
}

export default PanelDerecho2;