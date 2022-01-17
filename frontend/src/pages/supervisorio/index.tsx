import React, { useState, useEffect } from 'react';
import SideBar from '../../components/sideBar';

import solarIcon from '../../assets/img/placa-solar.svg';
import eolicaIcon from '../../assets/img/eolica.svg';
import batteryBankIcon from '../../assets/img/batery.svg'
import painelIcon from '../../assets/img/painel-eletrico.svg'

import './styles.css';
import api from '../../services/api';

function Supervisorio() {
    const [useVGeradaSolar1, setUseVGeradaSolar1] = useState([]);
    const [usePGeradaSolar1, setUsePGeradaSolar1] = useState([]);
    const [useIGeradaSolar1, setUseIGeradaSolar1] = useState([]);

    useEffect(() => {
        api.get('solar').then(response => {
            const ultimo_array = response.data[response.data.length - 1];

            const vGeradaSolarOne = ultimo_array.v_gerada;
            setUseVGeradaSolar1(vGeradaSolarOne);

            const pGeradaSolarOne = ultimo_array.pot_gerada;
            setUsePGeradaSolar1(pGeradaSolarOne);

            const iGeradaSolarOne = ultimo_array.i_gerada;
            setUseIGeradaSolar1(iGeradaSolarOne);
        })
    }, []);

    const [useVGeradaWind, setUseVGeradaWind] = useState([]);
    const [usePGeradaWind, setUsePGeradaWind] = useState([]);
    const [useIGeradaWind, setUseIGeradaWind] = useState([]);


    useEffect(() => {
        api.get('eolica').then(response => {
            const ultimo_array = response.data[response.data.length - 1];

            const vGeradaWind = ultimo_array.v_gerada;
            setUseVGeradaWind(vGeradaWind);

            const pGeradaWind = ultimo_array.pot_gerada;
            setUsePGeradaWind(pGeradaWind);

            const iGeradaWind = ultimo_array.i_gerada;
            setUseIGeradaWind(iGeradaWind);
        })
    }, []);

    const [useVStoredBattery, setUseVStoredBattery] = useState([]);
    const [useVoutBattery, setUseVoutBattery] = useState([]);
    const [useIBattery, setUseIBattery] = useState([]);
    const [usePStoredBattery, setUsePStoredBattery] = useState([]);
    const [usePoutBattery, setUsePoutBattery] = useState([]);

    useEffect(() => {
        api.get('battery').then(response => {
            const ultimo_array = response.data[response.data.length - 1];

            // const vStored = ultimo_array.V_Armazenada;
            // setUseVStoredBattery(vStored);

            // const voutBattery = ultimo_array.Vout;
            // setUseVoutBattery(voutBattery);

            // const iBattery = ultimo_array.I;
            // setUseIBattery(iBattery);

            // const poutBattery = ultimo_array.Pout;
            // setUsePoutBattery(poutBattery);

            // const pStored = ultimo_array.P_Armazenada;
            // setUsePStoredBattery(pStored);
        })
    }, [])

    return (
        <div id="page-info-gerais">
            <SideBar />

            <div className="page-content">
                <header>
                   
                </header>


                <section>
                    <div id="solar-energy-content">
                        <div className="card-solar-energy">
                            <h1>GERAÇÃO FOTOVOLTAÍCA 1</h1>
                            <img src={solarIcon} alt="Placa Fotovoltaíca" />

                            <h2>TENSÃO GERADA: {useVGeradaSolar1}V</h2>
                            <h2>POT GERADA: {usePGeradaSolar1}W</h2>
                            <h2>CORRENTE GERADA: {useIGeradaSolar1}A</h2>
                        </div>

                        <div className="card-solar-energy">
                            <h1>GERAÇÃO FOTOVOLTAÍCA 2</h1>
                            <img src={solarIcon} alt="Placa Fotovoltaíca" />

                            <h2>TENSÃO GERADA: 20V</h2>
                            <h2>POT GERADA: 100W</h2>
                            <h2>CORRENTE GERADA: 2A</h2>
                        </div>

                        <div className="card-solar-energy">
                            <h1>GERAÇÃO FOTOVOLTAÍCA 3</h1>
                            <img src={solarIcon} alt="Placa Fotovoltaíca" />

                            <h2>TENSÃO GERADA: 20V</h2>
                            <h2>POT GERADA: 100W</h2>
                            <h2>CORRENTE GERADA: 2A</h2>
                        </div>
                    </div>

                    <div id="right-energy-content">
                        <div id="wind-energy">
                            <h1>GERAÇÃO EÓLICA</h1>
                            <img src={eolicaIcon} alt="Placa Fotovoltaíca" />

                            <h2>TENSÃO GERADA: {useVGeradaWind}V</h2>
                            <h2>POT GERADA: {usePGeradaWind}W</h2>
                            <h2>CORRENTE GERADA: {useIGeradaWind}A</h2>
                        </div>

                        <div id="battery">
                            <h1>BANCO DE BATERIAS</h1>
                            <img src={batteryBankIcon} alt="Placa Fotovoltaíca" />

                            <h2>TENSÃO ARMAZENADA: {useVStoredBattery}V</h2>
                            <h2>TENSÃO UTILIZADA: {useVoutBattery}V</h2>
                            <h2>POT ARMAZENADA: {usePStoredBattery}W</h2>
                            <h2>POT UTILIZADA: {usePoutBattery}W</h2>
                            <h2>CORRENTE: {useIBattery}A</h2>

                        </div>

                        <div id="barramento">
                            <div className="card-bar-energy">
                                <h1>BARRAMENTO</h1>
                                <img src={painelIcon} alt="Painel Elétrico" />

                                <h2>TENSÃO RECEBIDA: 20V</h2>
                                <h2>TENSÃO UTILIZADA: 20V</h2>

                                <h2>POT GERADA: 100W</h2>
                                <h2>POT UTILIZADA: 100W</h2>

                                <h2>CORRENTE GERADA: 2A</h2>
                            </div>

                        </div>
                    </div>

                </section>

            </div>
        </div>

    )
}

export default Supervisorio;