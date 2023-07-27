import React from 'react';
import { Doughnut } from "react-chartjs-2";

const DonutChart = (props) => {

    let salesData = props.data;
    const data = {
        labels: ["Money In", "Money Out", "Debt"],
        datasets: [{
            label: 'KES',
            data: [salesData["Money In"], salesData["Money Out"], salesData["Debt"]],
            backgroundColor: ["#2cb34a", 'red', 'black'],
            borderColor: ['#2cb34a', 'red', 'black'],
        }]
    };


    const Options = {};

    return (
        <>
            <div >
                <Doughnut data={data} options={Options} />
            </div>

        </>
    )
};
export default DonutChart;