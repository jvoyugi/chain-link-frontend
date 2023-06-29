import React from "react";
import Nav from "../common/Nav";
import "bootstrap/dist/css/bootstrap.css" 
import './home.css';
import salesimage from "./images/sales.jpeg"
import inventoryimage from "./images/inventory.jpeg"
import procureimage from "./images/procure.jpeg"
import reportsimage from "./images/Reports.jpeg"
import chartsimage from "./images/charts.jpg"

const Home = () => {
  return (
    <>
    <Nav/>
    <div class = "container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title1">Sales And Supply Chain Link For Your Business</h5>
              <p class="card-text1">The All in one view and solution to track you business income, expenditure in real time.</p>
              
              <button type="button" class="btn btn-success btn-sm">Request For Free Trial</button>
     
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
          <div class="card-body">
            <img src={chartsimage} alt="image" className="image" style={{ "height": "140px", "width": "530px" }} />
          </div>
          </div>
        </div>
      </div>
      
          <p style={{ textAlign:"center" }}>Our Products Offering.</p>
          
    <div class="products">
        <div className="row row-cols-1 row-cols-md-4 g-1">
          <div className="col">
            <div className="card">
              <img src= {procureimage} className="card-img-top" alt="image" />
              <div className="card-body">
                <h6 className="card-title">Procurement</h6>
                <p className="card-text">Order sourcing and supplies debt management.</p>
                <a href="#" className="button" class0="btn btn-success">Learn More..</a>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <img src={salesimage} className="card-img-top" alt="image" />
              <div className="card-body">
                <h6 className="card-title">Point of Sale</h6>
                <p className="card-text">Management of sales and realtime payment solutions</p>
                <a href="#" className="button" class1="btn btn-success">Learn More..</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src= {reportsimage} className="card-img-top" alt="image" />
              <div className="card-body">
                <h6 className="card-title">Real-time dashboards</h6>
                <p className="card-text">View all reports and profits made from different products.</p>
                <a href="#" className="button" class2="btn btn-success">Learn More..</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={inventoryimage} className="card-img-top" alt="image" />
              <div className="card-body">
                <h6 className="card-title">Inventory Management</h6>
                <p className="card-text">Real time stock management and stock value reports.</p>
                <a href="#" className="button" class3="btn btn-success">Learn More..</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Home;

