import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Integration.module.css";
import DeletePopUp from "./components/IntegrationDeletePopUp";
import EditPopUp from "./components/IntegrationEditPopUp";
import PopUp from "./components/IntegrationPopUp";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";

const IntegrationTable = () => {



    const data = [
        { id: 1, column1: '1', column2: 'Mpesa', column3: 'K3456789', column4: 'Nairobi' },
        { id: 2, column1: '2', column2: 'Cash', column3: 'dfghjkiuy', column4: 'Kangemi' },
        { id: 3, column1: '3', column2: 'Warehouse', column3: 'asdfghj', column4: 'Uthiru' },
        { id: 4, column1: '4', column2: 'Supermarket', column3: 'K8765432', column4: 'Kahawa' },
        { id: 5, column1: '5', column2: 'Mpesa', column3: '987654765', column4: 'Regen' },
        { id: 6, column1: '6', column2: 'Cash', column3: 'uytrewqdfghj', column4: 'Kinoo' },
        { id: 7, column1: '7', column2: 'Warehouse', column3: 'iuytrfedwsq', column4: 'Kawangware' },
        { id: 8, column1: '8', column2: 'Supermarket', column3: 'iukjyhtgrfedws', column4: 'Kahawa' },
        { id: 9, column1: '9', column2: 'Mpesa', column3: 'oiuytrfedwsq', column4: 'Kenyatta' },
        { id: 10, column1: '10', column2: 'Cash', column3: 'iuyhtgrfe', column4: 'Nyeri' },
        { id: 11, column1: '11', column2: 'Warehouse', column3: 'ertyui', column4: 'Kisii' },
        { id: 12, column1: '12', column2: 'Supermarket', column3: '23456789', column4: 'Migori' },
    ];

    const[editPopUp, setEditPopUp]= useState(false);
    const[deletePopUp, setDeletePopUp]= useState(false);

    return (
        <div className="row">
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                    <tr>
                        <th>No</th>
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
                    {data.map(item => (
                        <tr key={item.id} className="p-1 align-items-center justify-content-center">
                            <td  >{item.column1}</td>
                            <td>{item.column2}</td>
                            <td>{item.column3}</td>
                            <td>{item.column4}</td>
                            <td>{item.column5}</td>
                            <td>{item.column6}</td>
                            <td>{item.column7}</td>
                            <td className={styles.tableActions} >
                                    <span className="flex justify-content-around">
                                    <BsFillPencilFill color="green" className="m-2" onClick={()=>setEditPopUp(true)} />
                                    <BsFillTrashFill color="red" className="m-2" onClick={()=>setDeletePopUp(true)}/>
                                     </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div>
                    <PopUp trigger={editPopUp}  setTrigger ={setEditPopUp} >
                        <EditPopUp  setTrigger ={setEditPopUp} />
                    </PopUp>

                    <PopUp trigger={deletePopUp}  setTrigger ={setDeletePopUp} >
                        <DeletePopUp  setTrigger ={setDeletePopUp} />
                    </PopUp>
                </div>
            </div>
        </div>
    );
};

export default IntegrationTable;

