import React from 'react';

import SideBar from '../../components/sideBar';

import Chart from '../../components/general-graph/chart-home';


import './styles.css';

import ManagementHome from '../../components/management-area-home';

function SmartGrid() {
    

    return (
        
        <div id="page">
            <SideBar />

            <div className="page-content">
                <header>
                    <h1>Smart Grid</h1>
                </header>

                <div className="graph-home">
                    <h1>Tensão Gerada</h1>
                    <Chart/>
                </div>
               
                <ManagementHome  />
                
            </div>




        </div>



    )
}

export default SmartGrid;