import React from "react";
import Nav from "../common/Nav";
import "bootstrap/dist/css/bootstrap.css" 
import './home.css';
import salesimage from "./images/sales.jpeg"

const Home = () => {
  return (
    <>
    <Nav/>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title1">Sales And Supply Chain Link For Your Business</h5>
              <p class="card-text1">The All in one view and solution to track you business income, expenditure in real time.</p>
              <button type="button" class="btn btn-success btn-sm">Request For Free Trial</button>
              <button type="button" class="btn btn-success btn-sm">Discover Video</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img src="image.jpg/supply1.jpg" alt="image" className="image" style={{ "height": "180px" }} />
          </div>
        </div>
      </div>
      <div class="products">
        <div className="row row-cols-3 row-cols-md-4 g-3">
          <div className="col">
            <div className="card">
              <img src="image.jpg/inventory.jpeg" className="card-img-top" alt="image" />
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
              <img src="image.jpg/Reports.jpeg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h6 className="card-title">Real-time dashboards</h6>
                <p className="card-text">View all reports and profits made from different products.</p>
                <a href="#" className="button" class2="btn btn-success">Learn More..</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="image.jpg/procure.jpeg" className="card-img-top" alt="image" />
              <div className="card-body">
                <h6 className="card-title">Inventory Management</h6>
                <p className="card-text">Real time stock management and stock value reports.</p>
                <a href="#" className="button" class3="btn btn-success">Learn More..</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;

