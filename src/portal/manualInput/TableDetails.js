import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./TableDetails.module.css";
import DeletePopUp from "./components/DeletePopUp";
import EditPopUp from "./components/EditPopUp";
import PopUp from "./components/PopUp";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";

const TableDetails = () => {



    const data = [
        { id: 1, column1: '1', column2: 'Mpesa', column3: 'Ksh 300,000', column4: 'Money 0ut' },
        { id: 2, column1: '2', column2: 'Cash', column3: 'Ksh 800,000', column4: 'Debt' },
        { id: 3, column1: '3', column2: 'Warehouse', column3: 'Ksh 345,000', column4: 'Money In' },
        { id: 4, column1: '4', column2: 'Supermarket', column3: 'Ksh 45,670', column4: 'Money In' },
        { id: 5, column1: '5', column2: 'Mpesa', column3: 'Ksh 300,000', column4: 'Money 0ut' },
        { id: 6, column1: '6', column2: 'Cash', column3: 'Ksh 800,000', column4: 'Debt' },
        { id: 7, column1: '7', column2: 'Warehouse', column3: 'Ksh 345,000', column4: 'Money In' },
        { id: 8, column1: '8', column2: 'Supermarket', column3: 'Ksh 45,670', column4: 'Money In' },
        { id: 9, column1: '9', column2: 'Mpesa', column3: 'Ksh 300,000', column4: 'Money 0ut' },
        { id: 10, column1: '10', column2: 'Cash', column3: 'Ksh 800,000', column4: 'Debt' },
        { id: 11, column1: '11', column2: 'Warehouse', column3: 'Ksh 345,000', column4: 'Money In' },
        { id: 12, column1: '12', column2: 'Supermarket', column3: 'Ksh 45,670', column4: 'Money In' },
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
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Status</th>
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
                                <td className={styles.tableActions} >
                                    <span className="flex justify-content-around">
                                    <BsFillTrashFill color="red" className="m-2" onClick={()=>setEditPopUp(true)} />
                                    <BsFillPencilFill color="green" className="m-2" onClick={()=>setDeletePopUp(true)}/>
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

export default TableDetails;

