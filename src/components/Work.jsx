import './Work.css';
import ExperienceProjectsList from './ExperienceProjectsList';

const Work = () => {
    return (
        <section id="work" className="section work">
            <h2 className="section-title"><span className="work-text">E</span>XPERIENCE & <span className="work-text">P</span>ROJECTS</h2>
            <div className="container work-container">
                <div className="work-journey animate-grid">
                    <div className="work-hero-image">
                        <img src="/elements/work-robot.png" alt="" />
                    </div>

                    <div className="journey-content">
                        <p>
                            My journey into the world of development began with a curiosity for how things work under the hood.
                            Starting with simple scripts, I quickly fell in love with the logic and creativity required to build robust applications.
                            Over time, I've honed my skills in <strong>AI, Computer Vision and Robotics</strong>, aiming to create intelligent systems that solve real-world problems.
                            <br /><br />
                            <em>(Here are some of my projects. Have a look!)</em>
                        </p>
                    </div>
                </div>

                <ExperienceProjectsList />
            </div>
        </section>
    );
};

export default Work;
