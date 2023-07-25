import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Integration.module.css";
import DeletePopUp from "./components/IntegrationDeletePopUp";
import EditPopUp from "./components/IntegrationEditPopUp";
import PopUp from "./components/IntegrationPopUp";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

const IntegrationTable = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editPopUp, setEditPopUp] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            let resp = await fetch(`${process.env.REACT_APP_API_URL}/api/business`,
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
                            <th>Business</th>
                            <th>Account No</th>
                            <th>Location</th>
                            <th>Identifier</th>
                            <th>Date Added</th>
                            <th>Date Edited</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="flex align-items-center justify-content-center" >
                        {data.length > 0 && data.map(item => (
                            <tr key={item._id} className="p-1 align-items-center justify-content-center">
                                <td>{item.businessName}</td>
                                <td>{item.accountNumber}</td>
                                <td>{item.location}</td>
                                <td>{item.identifier}</td>
                                <td>{item.dateAdded}</td>
                                <td>{item.dateEdited}</td>
                                <td className={styles.tableActions} >
                                    <span className="flex justify-content-around">
                                        <BsFillPencilFill color="green" className="m-2" onClick={() => { setEditPopUp(true); setSelectedItem(item) }} />
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

export default IntegrationTable;

