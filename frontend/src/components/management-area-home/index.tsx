import React, { useEffect, useState } from 'react';

import './styles.css';

import downArrow from '../../assets/img/down-arrow.svg';
import upArrow from '../../assets/img/up-arrow.svg';
import api from '../../services/api';




function ManagementHome() {
    const [useIinHome, setUseIinHome] = useState([]);
    const [useIoutHome, setUseIoutHome] = useState([]);
    const [useVinHome, setUseVinHome] = useState([]);

    useEffect(() => {
        api.get('general').then(response => {
            const ultimo_array = response.data[response.data.length - 1];


            const cIn = ultimo_array.Iin;
            
            setUseIinHome(cIn);
        })
    }, []);

    useEffect(() => {
        api.get('general').then(response => {
            const ultimo_array = response.data[response.data.length - 1];

            const cOut = ultimo_array.Iout;

            setUseIoutHome(cOut);
        })
    }, []);

    useEffect(() => {
        api.get('general').then(response => {
            const ultimo_array = response.data[response.data.length - 1];

            const vIn = ultimo_array.Vin;

            setUseVinHome(vIn);
        })
    }, []);

    var usePin = Number(useIinHome) * Number(useVinHome);
    var usePout = Number(useIoutHome) * Number(useVinHome);

    
    return (
        <div className="management-area">
            <h1>Uso da Potência</h1>
            <div className="up-down-area">

                <div className="down-energy">
                    <img src={downArrow} alt="Flecha para baixo" />
                    <h1>{usePout}W</h1>
                </div>

                <div className="up-energy">
                    <img src={upArrow} alt="Flecha para cima" />
                    <h1>{usePin}W</h1>
                </div>
            </div>
            <button>
                Gerenciar
            </button>
        </div>
    )
}

export default ManagementHome;