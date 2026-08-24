import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './WorkPageContent.css';
import works from '../data/worksData';

const FOLDER_COLORS = ['#ffffff', '#dbd9d8', '#bdbebd',, '#909090', '#efec3b'];

const WorkPageContent = () => {
    const navigate = useNavigate();
    const cardRefs = useRef([]);

    const filteredWorks = works
        .filter(work => work.category === 'ai')
        .sort((a, b) => a.id - b.id);

    const handleWorkClick = (work) => {
        navigate(`/project/${work.id}`);
    };

    useEffect(() => {
        const cards = cardRefs.current.filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-open');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px' }
        );

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, [filteredWorks.length]);

    return (
        <section id="work-page" className="section wp-work">
            <div className="container wp-work-container">
                {/* <h2>The <span className="wp-work-text">W</span>ork_</h2> */}

                <div className="wp-work-journey wp-animate-grid">
                    <div className="wp-work-hero-image">
                        <img src="/elements/work-robot.png" alt="" />
                    </div>

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

                <div className="envelope-stack">
                    {filteredWorks.length > 0 ? (
                        filteredWorks.map((work, index) => (
                            <div
                                key={work.id}
                                className="envelope-card"
                                style={{
                                    top: `${90 + index * 46}px`,
                                    zIndex: index + 1,
                                    '--folder-color': FOLDER_COLORS[index % FOLDER_COLORS.length]
                                }}
                                ref={(el) => { cardRefs.current[index] = el; }}
                            >
                                <div className="envelope-back" />
                                <div
                                    className="envelope-tab-shape"
                                    onClick={() => handleWorkClick(work)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') handleWorkClick(work);
                                    }}
                                    style={{ cursor: 'none' }}
                                >
                                    <span className="envelope-tab-shape-label">{work.title}</span>
                                </div>

                                <div className="envelope-front">
                                    

                                    <div className="envelope-content">
                                        <div className="envelope-content-inner">
                                            <div className="envelope-image">
                                                {work.src ? (
                                                    <img src={encodeURI(work.src)} alt={work.title} loading="lazy" />
                                                ) : (
                                                    <div className="wp-placeholder-work">
                                                        <span>{work.title}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="envelope-info">
                                                <p>{work.shortDesc || work.description}</p>
                                                <span className="envelope-cta" onClick={() => handleWorkClick(work)}>
                                                    View Project →
                                                </span>
                                            </div>
                                        </div>
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
