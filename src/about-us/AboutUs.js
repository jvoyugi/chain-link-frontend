import React from 'react';
import "./AboutUs.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import product_image from "./images/aboutUs.jpg";


const rowStyle = {
    backgroundColor: 'transparent',
};

const Scards = (props) => {
    return (
        <div className="col-md-4 col-lg-4 mb-3 text-center  ">
            <div className="box_border col-lg-9 p-3 pt-4 m-auto rounded border-data shadow">
                <img src={props.scardimage} className="img-fluid mb-2" alt="cards" width="20%" />
                <p className="my-2 about_title">{props.scardtitle}</p>
                <p className="text-muted text-left text-xl-center text-lg-center">{props.scarddesc}</p>
            </div>
        </div>
    );
};

const Data = [

    {
        scardimage: product_image,
        scardtitle : "Our story",
        scarddesc: "Our primary goal is to keep a firm afloat and ultimately to drive it to success. Other objectives of SCM include improving efficiency and quality, minimising costs, optimising delivery and distribution and providing the best possible experience to your customers.",
    },
    {
        scardimage: product_image,
        scardtitle : "Our mission",
        scarddesc: "Our mission is to provide individuals and businesses with payment technologies and products to increase efficiency,capability, speed, and innovation to the business world",
    },

    {
        scardimage: product_image,
        scardtitle : "Our vision",
        scarddesc: "Our primary goal is to keep a firm afloat and ultimately to drive it to success. Other objectives of SCM include improving efficiency and quality, minimising costs, optimising delivery and distribution and providing the best possible experience to your customers.",
    },



];

const AboutUs = ({ props }) => {





    return (
        <>
            <Nav navLinkItem="about"/>

            <section className="p-1 text-center text-sm-start top">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="intro-text1 my-5 p-1">
                            <h1>
                                GET  <span className="about_text">TO</span>  KNOW <span className="about_text">US </span>
                            </h1>

                            <div className='about_intro about_text justify-content-between'>
                                About us
                            </div>
                        </div>

                        <img src={product_image} className="img-fluid mb-2 d-sm-block rounded about-custom-image"  alt="chainLink" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto py-5">
                    <div className="mb-5 text-center align-items-center justify-content-center">
                        <p className="display-6 mb-1 row-header">ABOUT US</p>
                        <div className='underline'></div>
                        <h3 className="p-1 text-center text-sm-start">
                            We connect the world’s largest supply chain and logistics brands and their most senior executives with the latest trends, industry insight,
                            and influential projects as the world embraces technology and digital transformation.
                        </h3>
                    </div>
                    <div className="row d-sm-flex align-items-stretch justify-content-between" style={rowStyle}>
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

            <section>
                <div className="container mx-auto py-5">
                    <div className="mb-5 text-center">
                        <p className="display-6 mb-1 row-header">OUR GOAL</p>
                        <div className='underline'></div>
                    </div>
                    <div className="row d-sm-flex items-align-center justify-content-between p-1 text-center text-sm-start" >
                        <h2>Chain-link is dedicated to helping small businesses streamline operations, connect with customers
                            and increase revenue by providing them with an end-to-end solution for managing all of their payments needs.
                            From point-of-sale hardware for businesses of all kinds to powerful software that makes payments, appointments,
                            online ordering, delivery virtual terminals and more a breeze, Chain-link  helps small businesses build more revenue.
                        </h2>
                    </div>
                </div>
            </section>










            {/*<section id="about">*/}

            {/*    <h5>get to know us</h5>*/}
            {/*    <h2>Chain-link is dedicated to helping small businesses streamline operations, connect with customers*/}
            {/*        and increase revenue by providing them with an end-to-end solution for managing all of their payments needs.*/}
            {/*        From point-of-sale hardware for businesses of all kinds to powerful software that makes payments, appointments,*/}
            {/*        online ordering, delivery virtual terminals and more a breeze, Chain-link  helps small businesses build more revenue.*/}
            {/*    </h2>*/}

            {/*    <div className="container about_container">*/}

            {/*        <div className="about_us">*/}
            {/*            <div className="about_us.image">*/}
            {/*                <img src="./images/aboutUs.jpg" alt="image" className="about_us" style={{ "height": "180px" }} />*/}
            {/*            </div>*/}
            {/*        </div>*/}


            {/*        <div className="about_content">*/}
            {/*            <div className="about_cards">*/}
            {/*                <article classname="about_card">*/}
            {/*                    <h5>Our story</h5>*/}
            {/*                    <small>story</small>*/}
            {/*                </article>*/}

            {/*                <article classname="about_card">*/}
            {/*                    <h5>vision</h5>*/}
            {/*                    <small>vision statement</small>*/}
            {/*                </article>*/}

            {/*                <article classname="about_card">*/}
            {/*                    <h5>mission</h5>*/}
            {/*                    <small>Our mission is to provide individuals and businesses with payment technologies and products to increase efficiency,*/}
            {/*                        capability, speed, and innovation to the business world*/}
            {/*                    </small>*/}
            {/*                </article>*/}
            {/*            </div>*/}
            {/*            <p>*/}
            {/*                We connect the world’s largest supply chain and logistics brands and their most senior executives with the latest trends, industry insight,*/}
            {/*                and influential projects as the world embraces technology and digital transformation.*/}
            {/*            </p>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            



            <Footer />

        </>

    )
};
export default AboutUs;