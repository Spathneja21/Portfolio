import React, { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import './Work.css';

const Work = () => {
    const lenis = useLenis();
    const [activeCategory, setActiveCategory] = useState('ai');
    const [activeSubCategory, setActiveSubCategory] = useState('all');

    const works = [
        // Graphic Design - Posters
        { id: 1, category: 'graphic', src: '/elements/posters/marshM.png', title: 'MarshM' },
        { id: 2, category: 'graphic', src: '/elements/posters/simar-01.png', title: 'Simar 01' },
        { id: 3, category: 'graphic', src: '/elements/posters/simar-02.png', title: 'Simar 02' },
        { id: 4, category: 'graphic', src: '/elements/posters/simar-03.png', title: 'Simar 03' },
        // Graphic Design - Grids
        { id: 5, category: 'graphic', src: '/elements/grids/Artboard 1 (2).png', title: 'Artboard V2' },
        { id: 6, category: 'graphic', src: '/elements/grids/Artboard 1 (3).png', title: 'Eyes behind the Camera' },
        { id: 7, category: 'graphic', src: '/elements/grids/RECRUITMENT grid full-01.png', title: 'Recruitment Grid' },
        { id: 8, category: 'graphic', src: '/elements/grids/eyes behind the camera.png', title: 'Eyes Behind Camera' },
        { 
            id: 9, category: 'graphic', 
            src: '/elements/designs/Album cover 2.jpg',
            link: '#' 
        },
        { 
            id: 10, category: 'graphic', 
            src: '/elements/designs/baatcheet.png',
            link: '#' 
        },
        { 
            id: 11, category: 'graphic', 
            src: '/elements/designs/baatein.png',
            link: '#' 
        },
        { 
            id: 12, category: 'graphic', 
            src: '/elements/designs/doors.png',
            link: '#' 
        },
        { 
            id: 13, category: 'graphic', 
            src: '/elements/designs/enrique iglesias.png',
            link: '#' 
        },
        { 
            id: 14, category: 'graphic', 
            src: '/elements/designs/front page.png',
            link: '#' 
        },
        { 
            id: 15, category: 'graphic', 
            src: '/elements/designs/Main grid-16.png',
            link: '#' 
        },
        { 
            id: 16, category: 'graphic', 
            src: '/elements/designs/MELANIE.png',
            link: '#' 
        },
        { 
            id: 17, category: 'graphic', 
            src: '/elements/designs/poster2-01.png',
            link: '#' 
        },
        { 
            id: 18, category: 'graphic', 
            src: '/elements/designs/SIMAR 2.png',
            link: '#' 
        },
        { 
            id: 19, category: 'graphic', 
            src: '/elements/designs/SMILE.png',
            link: '#' 
        },
        { 
            id: 20, category: 'graphic', 
            src: '/elements/designs/squirral love design.png',
            link: '#' 
        },
        { 
            id: 21, category: 'graphic', 
            src: '/elements/designs/VOGUE.png',
            link: '#' 
        },
        { 
            id: 22, category: 'graphic', 
            src: '/elements/designs/website is live-01.png',
            link: '#' 
        },

        // AI Development
        {
            id: 23,
            category: 'ai',
            title: 'Diamond Price Predictor',
            shortDesc: 'End-to-end ML pipeline with 98% accuracy.',
            description: `Developed an end-to-end machine learning system to automate diamond pricing using a dataset of 53,940 records. 
            After rigorous data cleaning, deduplication, and outlier removal, I engineered a pipeline to evaluate 7 regression and 8 classification models. XGBoost emerged as the top performer for both tasks, achieving a 98.11% R2 score for price prediction and 96.01% accuracy for quality classification. The suite included diverse architectures from Linear Regression and SVMs to MLP Neural Networks.
            To conclude the lifecycle, I deployed the optimal regression model into a Streamlit web application, providing real-time, data-driven valuations for the gemstone industry.`,
            tags: ['XGBoost', 'Python', 'Streamlit', 'Scikit-Learn'],
            src: '/elements/ai/diamond.jpg',
            link: 'https://github.com/Spathneja21/Diamond_price_predictor.git'
        },

        {
            id: 24,
            category: 'ai',
            title: 'S.A.A.R.T.H.I. AI',
            shortDesc: 'Coming Soon',
            description: `Ever thought of having a personal manager?
            Well, here it is! An AI-powered personal manager that can help you with your daily tasks, schedule, and more.
            Coming soon...`,
            // tags: ['XGBoost', 'Python', 'Streamlit', 'Scikit-Learn'],
            src: '/elements/ai/saarthi.jpg',
            // link: 'https://github.com/Spathneja21/Diamond_price_predictor.git'
        },

        {
            id: 25,
            category: 'ai',
            title: 'Safe-Sight',
            shortDesc: 'Coming Soon',
            // description: `Developed an end-to-end machine learning system to automate diamond pricing using a dataset of 53,940 records. 
            // After rigorous data cleaning, deduplication, and outlier removal, I engineered a pipeline to evaluate 7 regression and 8 classification models. XGBoost emerged as the top performer for both tasks, achieving a 98.11% R2 score for price prediction and 96.01% accuracy for quality classification. The suite included diverse architectures from Linear Regression and SVMs to MLP Neural Networks.
            // To conclude the lifecycle, I deployed the optimal regression model into a Streamlit web application, providing real-time, data-driven valuations for the gemstone industry.`,
            // tags: ['XGBoost', 'Python', 'Streamlit', 'Scikit-Learn'],
            src: '/elements/ai/safesight.png',
            // link: 'https://github.com/Spathneja21/Diamond_price_predictor.git'
        },
    ];

    const filteredWorks = works.filter(work => {
        if (work.category !== activeCategory) return false;
        if (activeCategory === 'graphic' && activeSubCategory !== 'all' && work.subcategory !== activeSubCategory) return false;
        return true;
    });

    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (!lenis) return;
        if (selectedProject) {
            lenis.stop();
        } else {
            lenis.start();
        }
    }, [selectedProject, lenis]);

    const handleWorkClick = (work) => {
        setSelectedProject(work);
    };

    return (
        <section id="work" className="section work">
            <div className="container work-container">
                <h2>MY <span className="work-text">W</span>ork_</h2>

                <div className="work-categories">
                    <button className={`category-btn ${activeCategory === 'ai' ? 'active' : ''}`} onClick={() => setActiveCategory('ai')}>Development</button>
                    <button className={`category-btn ${activeCategory === 'graphic' ? 'active' : ''}`} onClick={() => { setActiveCategory('graphic'); setActiveSubCategory('all'); }}>Designing</button>
                    {/* <button className={`category-btn ${activeCategory === 'software' ? 'active' : ''}`} onClick={() => setActiveCategory('software')}>Software Development</button> */}
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

                {/* {activeCategory === 'graphic' && (
                    <div className="work-subcategories">
                        <button className={`filter-btn ${activeSubCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveSubCategory('all')}>All</button>
                        <button className={`filter-btn ${activeSubCategory === 'logos' ? 'active' : ''}`} onClick={() => setActiveSubCategory('logos')}>Logos</button>
                        <button className={`filter-btn ${activeSubCategory === 'posters' ? 'active' : ''}`} onClick={() => setActiveSubCategory('posters')}>Posters</button>
                        <button className={`filter-btn ${activeSubCategory === 'grids' ? 'active' : ''}`} onClick={() => setActiveSubCategory('grids')}>Grids</button>
                    </div>
                )} */}

                <div className="work-grid animate-grid" key={`${activeCategory}-${activeSubCategory}`}>
                    {filteredWorks.length > 0 ? (
                        filteredWorks.map((work) => (
                            <div
                                key={work.id}
                                className={`work-item ${activeCategory === 'graphic' ? 'design-item' : ''}`}
                                onClick={activeCategory !== 'graphic' ? () => handleWorkClick(work) : undefined}
                                style={{ cursor: activeCategory === 'graphic' ? 'default' : 'none' }}
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
                                            {/* Keep arrow for aesthetic, but card click opens modal mainly */}
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

                {/* Project Detail Modal */}
                {selectedProject && (
                    <div className="lightbox-overlay" onClick={() => setSelectedProject(null)}>
                        <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                            <button className="lightbox-close" onClick={() => setSelectedProject(null)}>&times;</button>

                            <div className="project-modal-content" data-lenis-prevent>
                                {selectedProject.src && (
                                    <div className="project-modal-image">
                                        <img src={encodeURI(selectedProject.src)} alt={selectedProject.title} />
                                    </div>
                                )}
                                <div className="project-modal-details" data-lenis-prevent>
                                    <h3>{selectedProject.title}</h3>
                                    <div className="project-description">
                                        {selectedProject.description ? (
                                            selectedProject.description.split('\n').map((line, i) => (
                                                line.trim() && <p key={i}>{line}</p>
                                            ))
                                        ) : (
                                            <p>Project details coming soon.</p>
                                        )}
                                    </div>

                                    {selectedProject.tags && (
                                        <div className="project-tags">
                                            {selectedProject.tags.map((tag, index) => (
                                                <span key={index} className="project-tag">{tag}</span>
                                            ))}
                                        </div>
                                    )}

                                    {selectedProject.link && selectedProject.link !== '#' && (
                                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-modal-link">
                                            View Project <span style={{ marginLeft: '5px' }}>↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Work;
