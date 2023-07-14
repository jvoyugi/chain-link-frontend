import React from 'react';
import { Doughnut } from "react-chartjs-2";

const DonutChart = (chartData) => {

    const data = {
        labels: ['MoneyIn', 'MoneyOut', 'Debts'],
        datasets: [{
            label: 'Poll',
            data: [3, 6,15],
            backgroundColor: ['black', 'red','green'],
            borderColor: ['black', 'red','green'],
        }]
    }

    const Options = {};

    return (
        <>
            <div >
                <Doughnut data={data} options={Options} />
            </div>

        </>
    )
};
export default DonutChart ;