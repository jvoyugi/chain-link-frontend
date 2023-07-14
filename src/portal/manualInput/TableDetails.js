import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableCard = () => {
    // Sample dataset
    const data = [
        { id: 1, column1: '1', column2: 'Mpesa', column3: 'Ksh 300,000', column4: 'Money 0ut' },
        { id: 2, column1: '2', column2: 'Cash', column3: 'Ksh 800,000', column4: 'Debt' },
        { id: 3, column1: '3', column2: 'Warehouse', column3: 'Ksh 345,000', column4: 'Money In' },
        { id: 4, column1: '4', column2: 'Supermarket', column3: 'Ksh 45,670', column4: 'Money In' },
    ];

    return (
        <div className="card">
            <div className="card-header">Details</div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.column1}</td>
                                <td>{item.column2}</td>
                                <td>{item.column3}</td>
                                <td>{item.column4}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TableCard;

