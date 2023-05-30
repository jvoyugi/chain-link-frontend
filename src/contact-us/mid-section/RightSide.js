import React from "react";

export const RightSide = ({ props }) => {
    return (
        <div className="section">
            <div className="form-message">
                Leave us a message
            </div>
            <div className="form">
                <form>
                    <input className="form-input" type="text" name="name" id="name" placeholder="Full name" required />
                    <input className="form-input" type="email" name="email" id="email" placeholder="Email" required />
                    <textarea className="form-input" name="message" id="message" placeholder="Your Message" rows={5} required />
                    <button class="submit-button" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}