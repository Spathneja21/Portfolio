import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <div className="contact-top">
                    <h2 className="contact-heading">
                        I'd like to <i>discuss</i><br />about anything
                    </h2>
                    <span className="contact-dot"></span>
                </div>

                <div className="contact-bottom">
                    <div className="contact-bot">
                        <img src="/elements/Anima Bot.svg" alt="Animated Bot" />
                    </div>

                    <div className="contact-info">
                        <a href="mailto:shubhampathneja.work@gmail.com" className="contact-email">shubhampathneja.work@gmail.com</a>
                        <span className="contact-phone">+91 830 767 5142</span>

                        <div className="contact-links">
                            <a href="https://www.linkedin.com/in/shubham-pathneja-a0726829b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://www.instagram.com/shubhampathneja_" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://github.com/Spathneja21" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="https://substack.com/@shubhampathneja21" target="_blank" rel="noopener noreferrer">Substack</a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
