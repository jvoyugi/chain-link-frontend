 import React from 'react';
import Data from "./Data";
import "./MidSection.css";
 import styles from "../../contact-us/mid-section/MidSection.module.css";

 const Scards = (props) => {
     return (
         <div className="col-md-4 col-lg-4 mb-3  text-center">
             <div className="box_border col-lg-9 p-3 pt-4 m-auto rounded">
                 <img src={props.scardimage} className="img-fluid mb-2 align-items-center" alt="cards" width="20%" />
                 <p className="my-2 justify-content-center">{props.scardtitle}</p>
                 <p className="text-muted text-left text-xl-center text-lg-center justify-content-center">{props.scarddesc}</p>
             </div>
         </div>
     );
 };

const MidSection = () => {
    return (
        <div className="solutions-page">
            <div className="row-header">
                Ultimate Features in one dashboard
                <div className='underline'></div>
            </div>


            <section>
                    <div className="mt-5 mb-5 text-center">
                    <div className="row-details mb-5 text-center">
                        {Data.map((val, ind) => (
                            <div className="column-details " key={ind}>
                                <Scards
                                    scardimage={val.scardimage}
                                    scardtitle={val.scardtitle}
                                    scarddesc={val.scarddesc}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>



        </div>
    )
};
export default MidSection;