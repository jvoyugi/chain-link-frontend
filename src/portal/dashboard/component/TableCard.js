import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableCard = () => {
    // Sample dataset
    // const data = [
    //     { id: 1, column1: '1', column2: 'Mpesa', column3: 'Ksh 300,000', column4: 'Money 0ut' },
    //     { id: 2, column1: '2', column2: 'Cash', column3: 'Ksh 800,000', column4: 'Debt' },
    //     { id: 3, column1: '3', column2: 'Warehouse', column3: 'Ksh 345,000', column4: 'Money In' },
    //     { id: 4, column1: '4', column2: 'Supermarket', column3: 'Ksh 45,670', column4: 'Money In' },
    // ];

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let resp = await fetch(`${process.env.REACT_APP_API_URL}/api/dashboard`,
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
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            {/*<th>No</th>*/}
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.length > 0 && data.map(item => (
                            <tr key={item.id}>
                                {/*<td>{item.description}</td>*/}
                                <td>{item.description}</td>
                                <td>{item.amount}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default TableCard;

