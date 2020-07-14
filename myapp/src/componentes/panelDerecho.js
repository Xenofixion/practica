import React ,{useEffect, useState}from 'react';
import './panelDerecho.css';

//HOOK PERSONALIZADO
function useCoordenadas (){
    const [coordenadas, setCoordenadas] = useState({latitud:null, longitud:null});
    let geoId;

    useEffect(
        () =>{
            geoId = window.navigator.geolocation.watchPosition(
                position => {
                    setCoordenadas({latitud: position.coords.latitude, longitud: position.coords.longitude});
                });
            return () => {
                navigator.geolocation.clearWatch(geoId);
            };
        }
    );
    
    return coordenadas;
}

//COMPONENTE
const PanelDerecho = (props) => {
    return(
        <div className="PanelDerecho">
            <p>Latitud:</p>
            <p>Longitud:</p>
        </div>
    );
}

export default PanelDerecho;