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
    const coordenadas = useCoordenadas();

    return  coordenadas.latitud == null ?
    
    (<div>Cargando...</div>)
    :
    (
        <div className="PanelDerecho">
            <p>Latitud: {coordenadas.latitud}</p>
            <p>Longitud: {coordenadas.longitud}</p>
        </div>
    );
}

export default PanelDerecho;