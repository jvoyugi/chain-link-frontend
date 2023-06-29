 import React from 'react';
import Data from "./Data";
import "./MidSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';

 const Scards = (props) => {
     return (
         <div className="col-md-4 col-lg-4 mb-3 text-center  ">
             <div className="box_border col-lg-9 p-3 pt-4 m-auto rounded border-data shadow">
                 <img src={props.scardimage} className="img-fluid mb-2" alt="cards" width="20%" />
                 <p className="my-2">{props.scardtitle}</p>
                 <p className="text-muted text-left text-xl-center text-lg-center">{props.scarddesc}</p>
             </div>
         </div>
     );
 };

const MidSection = () => {
    const rowStyle = {
        backgroundColor: 'transparent',
    };

    return (
        <>

            <section>
            <div className="container mx-auto py-5">
                    <div className="mb-5 text-center">
                        <p className="display-6 mb-1 row-header">Ultimate Features in one dashboard</p>
                        <div className='underline'></div>
                    </div>
                    <div className="row d-sm-flex items-align-center justify-content-between myRow" style={rowStyle}>
                        {
                            Data.map((val, ind) => {

                                return <Scards key={ind}
                                               scardimage={val.scardimage}
                                               scardtitle={val.scardtitle}
                                               scarddesc={val.scarddesc}
                                />
                            })
                        }
                    </div>
                </div>
            </section>


        </>

    )
};
export default MidSection;