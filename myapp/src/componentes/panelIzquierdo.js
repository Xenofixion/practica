import React ,{useState}from 'react';
import './panelIzquierdo.css';

const PanelIzquierdo = (props) => {

    const [cuenta, setCuenta]= useState(0);
    
    return (
        <div className="panelIzquierdo">
            <p>PRESIONE PARA AUMENTAR</p>
            <p>{cuenta}</p>
            <button onClick={() => setCuenta(cuenta +1)}>AUMENTAR</button>
            <button onClick={function() { setCuenta(cuenta -1)}}>DISMINUIR</button>
        </div>
    );
}

export default PanelIzquierdo;