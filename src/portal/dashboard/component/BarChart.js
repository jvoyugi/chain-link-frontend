import React from 'react';
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
const BarChart = () => {

    const data = {
        labels: ['Bank','Mpesa', 'Cash','Shop','Warehouse', 'Supermarket','July'],
        datasets: [{
            label: 'MoneyIn',
            data: [3, 6,4,5,6,7,8],
            backgroundColor: ['green'],
            borderColor: ['green'],
            borderWidth:1,
            order:2,
        },{
            label: 'MoneyOut',
            data: [3, 6,4,5,6,7,8],
            backgroundColor: ['orange'],
            borderColor: ['orange'],
            borderWidth:1,
            order:2,
        },{
            label: 'Debts',
            data: [3, 6,4,5,6,7,8],
            backgroundColor: ['red'],
            borderColor: ['red'],
            borderWidth:1,
            order:2,
        },{
            label: 'Average Sales',
            data: [3, 6,4,5,6,7,8],
            backgroundColor: ['black'],
            borderColor: ['black'],
            tension:0.5,
            type:'line',
            order:1,
        }]
    }

    const Options = {
        plugins:{
            legend:false
        },
        scale:{
            x:{
                stacked:true
            },
            y:{
                beginAtZero:true,
                stacked:true
            },

        }
    };

    return (
        <>
            <div >
                <Bar data={data} options={Options} />
            </div>

        </>
    )
};
export default BarChart ;