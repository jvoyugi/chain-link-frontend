import React from 'react';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js";

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const LineChart = () => {

    const data = {
        labels: ['January','February', 'March','April','May', 'June','July'],
        datasets: [{
            data: [3, 6,4,5,6,7,8],
            backgroundColor: ['black', 'red'],
            borderColor: ['black', 'red'],
            tension:0.5
        }]
    }

    const Options = {
        plugins:{
            legend:false
        },
        scale:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                min:2,
                max:20,
                 ticks:{
                    stepSize:2,
                     callback:(value)=>value+'K'
                 },
            },

        }
    };

    return (
        <>
            <div >
                <Line data={data} options={Options} />
            </div>

        </>
    )
};
export default LineChart ;