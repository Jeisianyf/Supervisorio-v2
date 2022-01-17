import React from 'react';

import homeIcon from '../../assets/img/home.svg';
import infoIcon from '../../assets/img/info.svg';
import solarIcon from '../../assets/img/placa-solar.svg';
import eolicaIcon from '../../assets/img/eolica.svg';
import batteryIcon from '../../assets/img/batery.svg';
import configIcon from '../../assets/img/settings.svg';

import './styles.css';

function SideBar() {
    return (
        <div id="side-bar">
            <div className="side-bar-content">
                <div className="hover">
                    <a href="/" className="home" id="selected">
                        <img src={homeIcon} alt="Home" />
                        SMART GRID
                    </a>
                </div>


                <a href="/supervisorio" className="info-geral">
                    <img src={infoIcon} alt="Informações" className="hover-svg" />
                    SUPERVISÓRIO
                </a>

                <a href="/solar" className="solar-energy">
                    <img src={solarIcon} alt="Energia Solar" className="hover-svg" />
                    GERAÇÃO FOTOVOLTAÍCA
                </a>

                <a href="" className="wind-energy">
                    <img src={eolicaIcon} alt="Energia eólica" className="hover-svg" />
                    GERAÇÃO EÓLICA
                </a>

                <a href="" className="battery">
                    <img src={batteryIcon} alt="Bateria" />
                    BANCO DE BATERIAS
                </a>

                <a href="/gerenciar" className="config">
                    <img src={configIcon} alt="Gerenciamento" className="hover-svg" />
                    GERENCIAMENTO
                </a>
            </div>
        </div>
    )
}

export default SideBar;