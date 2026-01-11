import React from 'react';
import './Contact.css';

const Contact = () => {
    const [showLinks, setShowLinks] = React.useState(false);

    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <h2>Let's Create Together_</h2>
                <p>Have a project in mind? Reach out and let's discuss.</p>
                <div className="contact-actions">
                    <div className={`social-links left ${showLinks ? 'active' : ''}`}>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhampathneja123@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                        <a href="https://www.instagram.com/shubhampathneja_" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>

                    <button className={`btn contact-btn ${showLinks ? 'active' : ''}`} onClick={() => setShowLinks(!showLinks)}>
                        <span className="btn-text">Get In Touch</span>
                        <span className="btn-icon">+</span>
                    </button>

                    <div className={`social-links right ${showLinks ? 'active' : ''}`}>
                        <a href="https://github.com/Spathneja21" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/shubham-pathneja-a0726829b" target="_blank" rel="noopener noreferrer">LinkedIn</a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
