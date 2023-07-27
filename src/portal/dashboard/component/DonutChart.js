import React, {useEffect, useState} from 'react';
import { Doughnut } from "react-chartjs-2";

const DonutChart = (chartData) => {

    let [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [moneyIn, setMoneyIn] = useState(0);
    const [moneyOut, setMoneyOut] = useState(0);
    const [debt, setDebt] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            let resp = await fetch(`${process.env.REACT_APP_API_URL}/api/dashboard/sales`,
                {
                    mode: "cors",
                    method: "GET",
                    credentials: "include"
                });
            if (resp.ok) {
                setData(await resp.json());

                {data1.length > 0 && data1.map(item => {
                    if(item._id === 'Money In'){
                        setMoneyIn(item.total) ;
                    }
                    if(item._id === 'Money Out'){
                        setMoneyOut(item.total) ;
                    }
                    if(item._id === 'Debt'){
                        setDebt(item.total);
                    }
                })}

                data = {
                    labels: ['MoneyIn', 'MoneyOut', 'Debts'],
                    datasets: [{
                        label: 'Poll',
                        data: [{moneyIn},{moneyOut},{debt}],
                        backgroundColor: ['black', 'red','#2cb34a'],
                        borderColor: ['black', 'red','#2cb34a'],
                    }]
                }

            }
        }
        let timerId = setTimeout(fetchData, 2000);
        return () => {
            clearTimeout(timerId);
        }

    }, [data1])



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