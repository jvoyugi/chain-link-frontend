import React from "react";

import './home.css';

const Home = () => {
    return (
        <>
     <nav></nav> 
         <div class="row">
            <div className="col-sm-6">
              <div cclassName="card">
                <div className="card-body">
                  <h5 className="card-title1">Sales And Supply Chain Link For Your Business</h5>
                  <p className="card-text1">The All in one view and solution to track you business income, expenditure in real time.</p>
                  <button type="button" className="btn btn-success btn-sm">Request For Free Trial</button>
                  <button type="button" className="btn btn-success btn-sm">Discover Video</button>
                </div>
                </div>
                </div>
              
            <div classNames="col-sm-6">
                <div className="card">                            
                    <img src="image.jpg/supply1.jpg" alt="image" className="image" style="height: 180px"/>                 
                  </div>
                </div>
              </div>
            
            <div className = "products">
                 <div classNameclass="row row-cols-3 row-cols-md-4 g-3">
                      <div cclassName="col">
                        <div className="card">
                          <img src="image.jpg/inventory.jpeg" className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h6 cclassName="card-title">Procurement</h6>
                            <p cclassName="card-text">Order sourcing and supplies debt management.</p>
                            <a href="#" className="button" className1="btn btn-success">Learn More..</a>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div cclassName="card">
                          <img src="image.jpg/sales.jpeg" className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h6 className="card-title"> Point of Sale</h6>
                            <p className="card-text">Management of sales and realtime payment solutions</p>
                            <a href="#" className="button" className2="btn btn-success">Learn More..</a>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <img src="image.jpg/Reports.jpeg" className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h6 className="card-title">Real-time dashboards</h6>
                            <p className="card-text">View all reports and profits made from different products.</p>
                            <a href="#" className="button" className3="btn btn-success">Learn More..</a>
                          </div>
                      </div>
                  </div>
                      <div className="col">
                        <div className="card">
                          <img className="image.jpg/procure.jpeg" className4="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h6 className="card-title">Inventory Management</h6>
                            <p className="card-text">Real time stock management and stock value reports.</p>
                            <a href="#" className="button" className5="btn btn-success">Learn More..</a>
                        </div>
                    </div>
                </div>
                </div>  
                </div>    
                
     </>
    )
}
export default Home;

