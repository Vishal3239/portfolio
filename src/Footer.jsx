import './Footer.css';

export default function Footer(){
    return (
        <>
            <div className="contact-section">

                <div className="contact-container">

                    <h1 className="contact-title">Get In Touch</h1>

                    <p className="contact-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <form className="contact-form">

                        <div className="input-group">
                            <label class="input-label">Email</label>
                            <input type="email" class="input-field" placeholder="Please enter your email"/>
                        </div>

                        <div className="input-group">
                            <label class="input-label">Mobile</label>
                            <input type="text" class="input-field" placeholder="Enter mobile"/>
                        </div>

                        <div className="input-group">
                            <label class="input-label">Message</label>
                            <textarea class="message-field" placeholder="Enter your message"></textarea>
                        </div>

                        <button className="submit-btn">Submit <span class="arrow"></span></button>

                    </form>

                </div>

            </div>
        </>
    );
}