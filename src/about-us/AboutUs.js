import React from 'react';
import "./AboutUs.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import US from "./images/aboutUs.jpg"

const AboutUs = ({ props }) => {
    return (
        <>
            <Nav />

            <section id="about">

                <h5>get to know us</h5>
                <h2>Chain-link is dedicated to helping small businesses streamline operations, connect with customers
                    and increase revenue by providing them with an end-to-end solution for managing all of their payments needs.
                    From point-of-sale hardware for businesses of all kinds to powerful software that makes payments, appointments,
                    online ordering, delivery virtual terminals and more a breeze, Chain-link  helps small businesses build more revenue.
                </h2>

                <div className="container about_container">

                    <div className="about_us">
                        <div className="about_us.image">
                            <img src="./images/aboutUs.jpg" alt="image" className="about_us" style={{ "height": "180px" }} />
                        </div>
                    </div>


                    <div className="about_content">
                        <div className="about_cards">
                            <article classname="about_card">
                                <h5>Our story</h5>
                                <small>story</small>
                            </article>

                            <article classname="about_card">
                                <h5>vision</h5>
                                <small>vision statement</small>
                            </article>

                            <article classname="about_card">
                                <h5>mission</h5>
                                <small>Our mission is to provide individuals and businesses with payment technologies and products to increase efficiency,
                                    capability, speed, and innovation to the business world
                                </small>
                            </article>
                        </div>
                        <p>
                            We connect the world’s largest supply chain and logistics brands and their most senior executives with the latest trends, industry insight,
                            and influential projects as the world embraces technology and digital transformation.
                        </p>

                    </div>
                </div>
            </section>
            



            <Footer />

        </>

    )
};
export default AboutUs;