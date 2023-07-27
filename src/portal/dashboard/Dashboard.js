import React, {useEffect, useState} from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from "./Dashboard.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsFillArrowDownRightCircleFill } from "react-icons/bs";
import DonutChart from "./component/DonutChart";
import LineChart from "./component/LineChart";
import BarChart from "./component/BarChart";
import TableCard from "./component/TableCard";
import Layout from '../../common/Layout';
ChartJs.register(
    ArcElement, Tooltip, Legend
);

const DashBoard = () => {
    const [data, setData] = useState([]);

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
            }
        }
        let timerId = setTimeout(fetchData, 2000);
        return () => {
            clearTimeout(timerId);
        }
    }, [data])

    return (<Layout navLinkItem={"dashboard"} pageTitle={"Dashboard"} child={
        <>
            <div className="container">
                <div className="row  align-items-center justify-content-evenly">
                    <div className="col-md-4 col-lg-3 text-center card m-1">
                        <div className="box_border position-relative rounded pt-2 pb-2 ">
                            <BsFillArrowUpCircleFill size="4em" color="#2cb34a" />
                            <p>Total Sales</p>
                            <p className="text-muted text-left text-xl-center text-lg-center">
                                {item._id === 'Money In' ? `${item.total}` : '0'}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 text-center card m-1">
                        <div className="box_border position-relative rounded pt-2 pb-2 ">
                            <BsFillArrowDownCircleFill size="4em" color="orange" />
                            <p>Total Money Out</p>
                            <p className="text-muted text-left text-xl-center text-lg-center">
                                {item._id === 'Money Out' ? `${item.total}` : '0'}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 text-center card m-1">
                        <div className="box_border position-relative rounded pt-2 pb-2 ">
                            <BsFillArrowDownRightCircleFill size="4em" color="red" />
                            <p>Total Debts</p>
                            <p className="text-muted text-left text-xl-center text-lg-center">
                                {item._id === 'Debt' ? `${item.total}` : '0'}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {/*mid section*/}
            <div className="container">
                <div className="row  align-items-stretch justify-content-center m-2 p-2 flex-md-row flex-column">
                    <div className="col card m-2 flex-item" >
                        <h2 className="card-title">General Trends Over Time</h2>
                        <div className="card-content" className={styles.dashBoardCardContent}>
                            <LineChart />
                        </div>
                    </div>
                    <div className="col card m-2 flex-item" >
                        <h2 className="card-title">Comparison per business Entity</h2>
                        <div className="card-content" className={styles.dashBoardCardContent}>
                            <BarChart />
                        </div>

                    </div>
                </div>
            </div>
            {/*Bottom  section*/}
            <div className="container">
                <div className="row d-sm-flex align-items-stretch justify-content-between m-2 p-2 flex-md-row flex-column">
                    <div className="col card m-2" >

                        <h2 className="card-title">Recent Transactions per Business</h2>
                        <div className="card-content" className={styles.dashBoardCardContent}>
                            <TableCard />
                        </div>
                    </div>
                    <div className="col card m-2">
                        <h2 className="card-title">Overall Comparison</h2>
                        <div className="card-content" className={styles.dashBoardCardContent}>
                            <DonutChart />
                        </div>
                    </div>
                </div>
            </div>
        </>} />
    )
};

export default DashBoard;
