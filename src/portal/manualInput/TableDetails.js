import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./TableDetails.module.css";
import DeletePopUp from "./components/DeletePopUp";
import EditPopUp from "./components/EditPopUp";
import PopUp from "./components/PopUp";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

const TableDetails = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editPopUp, setEditPopUp] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            let resp = await fetch(`${process.env.REACT_APP_API_URL}/api/transactions`,
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

    return (
        <div className="row">
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="flex align-items-center justify-content-center" >
                        {data.length > 0 && data.map(item => (
                            <tr key={item._id} className="p-1 align-items-center justify-content-center">
                                <td  >{item.description}</td>
                                <td>{item.amount}</td>
                                <td>{item.status}</td>
                                <td className={styles.tableActions} >
                                    <span className="flex justify-content-around">
                                        <BsFillPencilFill color="red" className="m-2" onClick={() => { setEditPopUp(true); setSelectedItem(item) }} />
                                        <BsFillTrashFill color="red" className="m-2" onClick={() => { setDeletePopUp(true); setSelectedItem(item) }} />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <PopUp trigger={editPopUp} setTrigger={setEditPopUp} >
                        <EditPopUp setTrigger={setEditPopUp} selectedItem={selectedItem} />
                    </PopUp>

                    <PopUp trigger={deletePopUp} setTrigger={setDeletePopUp} >
                        <DeletePopUp setTrigger={setDeletePopUp} selectedItem={selectedItem} />
                    </PopUp>
                </div>
            </div>
        </div>
    );
};

export default TableDetails;

