import { useNavigate } from 'react-router-dom';
import './WorkPageContent.css';
import works from '../data/worksData';

const WorkPageContent = () => {
    const navigate = useNavigate();

    const filteredWorks = works
        .filter(work => work.category === 'ai')
        .sort((a, b) => a.id - b.id);

    const handleWorkClick = (work) => {
        navigate(`/project/${work.id}`);
    };

    return (
        <section id="work-page" className="section wp-work">
            <div className="container wp-work-container">
                {/* <h2>The <span className="wp-work-text">W</span>ork_</h2> */}

                <div className="wp-work-journey wp-animate-grid">
                    <div className="wp-journey-content">
                        {/* <h3>Dev Odyssey</h3> */}
                        <p>
                            My journey into the world of development began with a curiosity for how things work under the hood.
                            Starting with simple scripts, I quickly fell in love with the logic and creativity required to build robust applications.
                            Over time, I've honed my skills in <i><strong>AI, Computer Vision and Robotics</strong></i>, aiming to create intelligent systems that solve real-world problems.
                            <br /><br />
                            <em>(Here are some of my projects. Have a look!)</em>
                        </p>
                    </div>
                </div>

                <div className="wp-work-grid wp-animate-grid">
                    {filteredWorks.length > 0 ? (
                        filteredWorks.map((work) => (
                            <div
                                key={work.id}
                                className="wp-work-item"
                                onClick={() => handleWorkClick(work)}
                                style={{ cursor: 'none' }}
                            >
                                <div className="wp-work-image-container">
                                    {work.src ? (
                                        <img src={encodeURI(work.src)} alt={work.title} loading="lazy" />
                                    ) : (
                                        <div className="wp-placeholder-work">
                                            <span>{work.title}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="wp-work-info">
                                    <h4>{work.title}</h4>
                                    <div className="wp-work-meta">
                                        <p>{work.shortDesc || work.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="wp-no-work-message">No projects found in this category yet.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WorkPageContent;
