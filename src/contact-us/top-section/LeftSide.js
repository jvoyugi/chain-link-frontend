import React from "react";

export const LeftSide = () => {
    return (
        <div className="left-section">
            <div className='top-section-header'>
                Subscribe to our mailing list to get the best offers
            </div>
            <div className='top-section-body'>
                By subscribing you agree to terms of service
            </div>
            <form>
                <div className="top-section-form">
                    <div>
                        <input type="email" className="email-subscriber-input" placeholder="Enter your email" name='email' id='email' required />
                    </div>
                    <div>
                        <button type="submit" className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    )
}