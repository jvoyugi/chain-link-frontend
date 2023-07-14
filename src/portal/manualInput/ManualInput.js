import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableDetails from "./TableDetails";
const ManualInput = () => {
    return (
        <>
            <div className="col-md-6 card">
            <h2 className="card-title">Comparisons</h2>
            <div className="card-content">
                <TableDetails />
            </div>

        </div>

        </>
    )
};
export default ManualInput;