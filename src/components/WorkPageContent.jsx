import './WorkPageContent.css';
import ExperienceProjectsList from './ExperienceProjectsList';

const WorkPageContent = () => {
    return (
        <section id="work-page" className="section wp-work">
            <div className="container wp-work-container">
                <div className="wp-work-journey wp-animate-grid">
                    <div className="wp-work-hero-image">
                        <img src="/elements/work-robot.png" alt="" />
                    </div>

                    <div className="wp-journey-content">
                        <p>
                            My journey into the world of development began with a curiosity for how things work under the hood.
                            Starting with simple scripts, I quickly fell in love with the logic and creativity required to build robust applications.
                            Over time, I've honed my skills in <i><strong>AI, Computer Vision and Robotics</strong></i>, aiming to create intelligent systems that solve real-world problems.
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

export default WorkPageContent;
