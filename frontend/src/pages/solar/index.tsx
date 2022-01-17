import React from 'react';
import SideBar from '../../components/sideBar';

import ChartSolar from '../../components/general-graph/chartTotalSolar';
import ChartArray1 from '../../components/general-graph/chartSolarArray1';
import ChartArray2 from '../../components/general-graph/chartSolarArray2';

import './styles.css';
import ChartArray3 from '../../components/general-graph/chartSolarArray3';

function Solar() {

    return (

        <div id="page">
            <SideBar />
            <div className="page-content">
                <div className="chart-total">
                    <h1>Geração Total</h1>
                    <ChartSolar />
                </div>

                <div id="chart-array">
                    <div className="chart-array1">
                        <h1>Geração String 1</h1>
                        <ChartArray1 />
                    </div>
                    <div className="chart-array2">
                        <h1>Geração String 2</h1>
                        <ChartArray2 />
                    </div>
                </div>

                <div id="bottom-pag">
                    <div className="chart-array3">
                        <h1>Geração String 3</h1>
                        <ChartArray3 />
                    </div>

                    <a id="gerenciar-solar" href="/gerenciar">GERENCIAMENTO</a>

                </div>



            </div>
        </div>



    )
}

export default Solar;