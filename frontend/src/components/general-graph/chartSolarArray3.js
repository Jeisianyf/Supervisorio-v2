import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import api from '../../services/api';


function ChartArray3(props) {
    const [useVinGeneral, setUseVinGeneral] = useState([]);
    const [useCreated, setUseCreated] = useState([0]);

    useEffect(() => {
        api.get('general').then(response => {
            const arrayVin = response.data;
            const vinMade = arrayVin.map(item => item.Vin);
            console.log(arrayVin);
            console.log(vinMade)

            setUseVinGeneral(vinMade);
        })
    }, []);

    useEffect(() => {
        api.get('general').then(response => {
            const arrayCreated = response.data;
            const created = arrayCreated.map(item => item.created_at);
            console.log(created);
            console.log(created[0]);

            setUseCreated(created);
        })
    }, []);



    const state = {
        chartData: {
            labels: [...useCreated],
            datasets: [
                {
                    data: [...useVinGeneral],

                    label: 'Tensão Gerada',

                    backgroundColor: '#5a49df',
                    //backgroundColor: '#6E74BB',
                    borderColor: '#fff',
                    pointRadius: 5,
                    color: '#FFF'

                }
            ]
        }
    }


    return (
        <div className="chart">
            <Line
                data={state.chartData}
                width={580}
                height={250}
                options={{
                    maintainAspectRatio: false,
                    layout: {
                        padding: {
                            left: 50,
                            right: 0,
                            top: 0,
                            bottom: 0
                        },
                        legend: {
                            labels: {
                                fontColor: '#FFF'
                            }
                        }
                    },
                }
            }
            />
        </div>
    )
}
export default ChartArray3;
