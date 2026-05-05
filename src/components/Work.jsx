import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Work.css';
import works from '../data/worksData';

const Work = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('ai');
    const [activeSubCategory, setActiveSubCategory] = useState('all');

    const filteredWorks = works.filter(work => {
        if (work.category !== activeCategory) return false;
        if (activeCategory === 'graphic' && activeSubCategory !== 'all' && work.subcategory !== activeSubCategory) return false;
        return true;
    });

    const handleWorkClick = (work) => {
        navigate(`/project/${work.id}`);
    };

    return (
        <section id="work" className="section work">
            <div className="container work-container">
                <h2>MY <span className="work-text">W</span>ork_</h2>

                <div className="work-categories">
                    <button className={`category-btn ${activeCategory === 'ai' ? 'active' : ''}`} onClick={() => setActiveCategory('ai')}>Development</button>
                    <button className={`category-btn ${activeCategory === 'graphic' ? 'active' : ''}`} onClick={() => { setActiveCategory('graphic'); setActiveSubCategory('all'); }}>Designing</button>
                </div>

                <div className="work-journey animate-grid">
                    {activeCategory === 'ai' && (
                        <div className="journey-content">
                            <h3>Dev Odyssey</h3>
                            <p>
                                My journey into the world of development began with a curiosity for how things work under the hood.
                                Starting with simple scripts, I quickly fell in love with the logic and creativity required to build robust applications.
                                Over time, I've honed my skills in <strong>AI, Machine Learning, and Full-Stack Development</strong>, aiming to create intelligent systems that solve real-world problems.
                                <br /><br />
                                <em>(Here are some of my projects. Have a look!)</em>
                            </p>
                        </div>
                    )}
                    {activeCategory === 'graphic' && (
                        <div className="journey-content">
                            <h3>Design Philosophy</h3>
                            <p>
                                Design is where my technical side meets my creative soul. <strong><i>ART</i></strong> is my escape.
                                I believe in <strong>minimalism with a purpose</strong>. My goal is to craft visual experiences that are not only aesthetically pleasing but also communicate a clear message and evoke the right emotions.
                                <br />I like trying different <i>styles</i>.<br />
                                I make grids, posters, graphic artworks, logos and more......
                                <em>Here is some of my work. Have a look!</em>
                            </p>
                        </div>
                    )}
                </div>

                <div className="work-grid animate-grid" key={`${activeCategory}-${activeSubCategory}`}>
                    {filteredWorks.length > 0 ? (
                        filteredWorks.map((work) => (
                            <div
                                key={work.id}
                                className={`work-item ${activeCategory === 'graphic' ? 'design-item' : ''}`}
                                onClick={() => handleWorkClick(work)}
                                style={{ cursor: 'none' }}
                            >
                                <div className="work-image-container">
                                    {work.src ? (
                                        <img src={encodeURI(work.src)} alt={work.title} loading="lazy" />
                                    ) : (
                                        <div className="placeholder-work">
                                            <span>{work.title}</span>
                                        </div>
                                    )}
                                </div>
                                {activeCategory !== 'graphic' && (
                                    <div className="work-info">
                                        <h4>{work.title}</h4>
                                        <div className="work-meta">
                                            <p>{work.shortDesc || work.description}</p>
                                            <span className="work-link-icon">↗</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="no-work-message">No projects found in this category yet.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Work;
