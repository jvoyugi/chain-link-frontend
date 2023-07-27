import React, { useEffect, useState } from 'react';
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
    const [barData, setBarData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            let resp = await fetch(`${process.env.REACT_APP_API_URL}/api/dashboard/sales/summary`,
                {
                    mode: "cors",
                    method: "GET",
                    credentials: "include"
                });
            if (resp.ok) {
                let jsonResp = await resp.json();
                let moneyIn = [];
                let moneyOut = [];
                let debts = [];
                let businessNames = [];
                jsonResp.forEach(element => {
                    businessNames.push(element.name);
                    moneyIn.push(element.status.hasOwnProperty("Money In") ? element.status["Money In"] : 0);
                    moneyOut.push(element.status.hasOwnProperty("Money Out") ? element.status["Money Out"] : 0);
                    debts.push(element.status.hasOwnProperty("Debt") ? element.status["Debt"] : 0);
                });

                setBarData({
                    labels: businessNames,
                    datasets: [{
                        label: 'Money In',
                        data: moneyIn,
                        backgroundColor: ['#2cb34a'],
                        borderColor: ['#2cb34a'],
                        borderWidth: 1,
                        order: 2,
                    }, {
                        label: 'Money Out',
                        data: moneyOut,
                        backgroundColor: ['orange'],
                        borderColor: ['orange'],
                        borderWidth: 1,
                        order: 2,
                    }, {
                        label: 'Debt',
                        data: debts,
                        backgroundColor: ['red'],
                        borderColor: ['red'],
                        borderWidth: 1,
                        order: 2,
                    }]
                });
            }
        }
        let timerId = setTimeout(fetchData, 2000);
        return () => {
            clearTimeout(timerId);
        }

    }, [barData])

    const Options = {
        plugins: {
            legend: false
        },
        scale: {
            x: {
                stacked: true
            },
            y: {
                beginAtZero: true,
                stacked: true
            },

        }
    };

    return (
        <>
            <div >
                {barData && <Bar data={barData} options={Options} />}
            </div>

        </>
    )
};
export default BarChart;