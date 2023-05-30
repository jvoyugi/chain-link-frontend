import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const LeftSide = () => {
    return (
        <div className="section">
            <div className='section-header'>
                We are looking forward to start a project with you
            </div>
            <div className='section-body'>
                Our strong team allows us to successfully initiate,
                execute and commission multi-disciplinary projects
                spanning all aspects of engineering. We have a solution for you!
            </div>
            <div>
                <div className='section-footer'>
                    <div className='section-footer-row'>
                        <span className='icon'>
                            <FontAwesomeIcon icon={faBuilding} />
                        </span>
                        <br />
                        N<sup>th</sup> floor, <br />
                        Times Tower,<br />
                        Haile Selasie Ave., <br />
                        Nairobi,Kenya
                    </div>
                    <div className='section-footer-row'>
                        <span className='icon'>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </span>
                        <br />
                        Mobile: +254 712 345 678
                        <br />
                        Tel: 020 123 5678
                    </div>
                    <div className='section-footer-row'>
                        <span className='icon'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <br />
                        Email: hello@chain-link.co.ke
                    </div>
                </div>
                <div className='section-footer-icons'>
                    <div className='icon footer-icon'>
                        <FontAwesomeIcon icon={faYoutube} size='2xl' />
                    </div>
                    <div className='icon footer-icon'>
                        <FontAwesomeIcon icon={faInstagram} size='2xl' />
                    </div>
                    <div className='icon footer-icon'>
                        <FontAwesomeIcon icon={faFacebookF} size='2xl' />
                    </div>
                    <div className='icon footer-icon'>
                        <FontAwesomeIcon icon={faTwitter} size='2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}