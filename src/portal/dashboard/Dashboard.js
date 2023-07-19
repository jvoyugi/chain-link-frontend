import React from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from "./Dashboard.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsFillArrowDownRightCircleFill } from "react-icons/bs";
import DonutChart from "./component/DonutChart";
import LineChart from "./component/LineChart";
import BarChart from "./component/BarChart";
import TableCard from "./component/TableCard";
import Nav from "../../common/Nav";
import SideBar from "../sideBar/SideBar";
ChartJs.register(
    ArcElement, Tooltip, Legend
);

const DashBoard = () => {

    return (
        <>
            <div>
                <SideBar navLinkItem="dashboard"/>
            <div className={styles.dashboardApp} >


                {/*//top section*/}
                <div className="container mx-auto py-5 ">
                    <div className=" row pt-5 align-items-center justify-content-evenly">
                        <div className="col-md-4 col-lg-3 font-weight-bold" className={styles.dashboardTitle}>
                            Dashboard
                        </div>
                    </div>
                    <div className="row  align-items-center justify-content-evenly">

                        <div className="col-md-4 col-lg-3 text-center card m-1">
                            <div className="box_border position-relative rounded pt-2 pb-2 ">
                                <BsFillArrowUpCircleFill size="4em" color="green" />
                                <p>Total Sales</p>
                                <p className="text-muted text-left text-xl-center text-lg-center"> KSH 5000000</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 text-center card m-1">
                            <div className="box_border position-relative rounded pt-2 pb-2 ">
                                <BsFillArrowDownCircleFill size="4em" color="orange" />
                                <p>Total Money Out</p>
                                <p className="text-muted text-left text-xl-center text-lg-center"> KSH 5000000</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 text-center card m-1">
                            <div className="box_border position-relative rounded pt-2 pb-2 ">
                                <BsFillArrowDownRightCircleFill size="4em" color="red" />
                                <p>Total Debts</p>
                                <p className="text-muted text-left text-xl-center text-lg-center"> KSH 5000000</p>
                            </div>
                        </div>

                    </div>



                </div>

                {/*mid section*/}
                <div className="row d-sm-flex align-items-center justify-content-center m-5 p-3">
                    <div className="col-md-4card " className={styles.dashboardChartWrapper}>
                            <h2 className="card-title">General Trends Over Time</h2>
                            <div className="card-content">
                                <LineChart/>
                            </div>
                    </div>
                    <div  className="col-md-4 card" className={styles.dashboardChartWrapper} >
                        <h2 className="card-title">Comparison per business Entity</h2>
                        <div className="card-content">
                            <BarChart/>
                        </div>

                    </div>
                </div>
                {/*Bottom  section*/}
                <div className="row d-sm-flex align-items-center justify-content-center m-5 p-3">
                    <div className="col-md-6 card">

                        <h2 className="card-title">Recent Transactions per Business</h2>
                        <div className="card-content">
                            <TableCard />
                        </div>


                    </div>
                    <div className="col-md-6 card">
                        <h2 className="card-title">Comparisons</h2>
                        <div className="card-content">
                            <DonutChart />
                        </div>

                    </div>

                </div>


                <div>

                </div>
            </div>
            </div>
        </>
    )
};

export default DashBoard;
