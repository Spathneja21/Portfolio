import React, { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import './Work.css';

const Work = () => {
    const lenis = useLenis();
    const [activeCategory, setActiveCategory] = useState('ai');
    const [activeSubCategory, setActiveSubCategory] = useState('all');

    const works = [
        // Graphic Design - Posters
        { id: 1, category: 'graphic', subcategory: 'posters', src: '/elements/posters/marshM.png', title: 'MarshM', description: 'Poster Design', link: 'https://www.instagram.com/p/DLP_ebBBbKF/?igsh=MWN1ajBjOW9iempwMA==' },
        { id: 2, category: 'graphic', subcategory: 'posters', src: '/elements/posters/simar-01.png', title: 'Simar 01', description: 'Poster Design', link: 'https://www.instagram.com/p/DLSmZVNtky2/?igsh=ZDYzODU3a2o1dTh0' },
        { id: 3, category: 'graphic', subcategory: 'posters', src: '/elements/posters/simar-02.png', title: 'Simar 02', description: 'Poster Design', link: 'https://www.instagram.com/p/DLSmFBoNQNP/?igsh=MXU2dXdxcmtnY216YQ==' },
        { id: 4, category: 'graphic', subcategory: 'posters', src: '/elements/posters/simar-03.png', title: 'Simar 03', description: 'Poster Design', link: 'https://www.instagram.com/p/DLSl0cNNb0z/?igsh=Zmtrc2pmZGFrdWtv' },
        // Graphic Design - Grids
        { id: 5, category: 'graphic', subcategory: 'grids', src: '/elements/grids/Artboard 1 (2).png', title: 'Artboard V2', description: 'Grid Layout', link: 'https://www.instagram.com/p/DQt0aBoEg1B/?igsh=MW80czdsNjR3dnFzdg==' },
        { id: 6, category: 'graphic', subcategory: 'grids', src: '/elements/grids/Artboard 1 (3).png', title: 'Eyes behind the Camera', description: 'Social Media Grid', link: 'https://www.instagram.com/p/DQpGVqEEjMk/?igsh=MTBhY2lvOGVsazNqbA==' },
        { id: 7, category: 'graphic', subcategory: 'grids', src: '/elements/grids/RECRUITMENT grid full-01.png', title: 'Recruitment Grid', description: 'Grid Layout', link: 'https://www.instagram.com/p/DN-5UFlkpBo/?igsh=MWRwMHl5Yzk0cXN5OA==' },
        { id: 8, category: 'graphic', subcategory: 'grids', src: '/elements/grids/eyes behind the camera.png', title: 'Eyes Behind Camera', description: 'Grid Layout', link: '#' },

        // AI Development
        {
            id: 9,
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
            id: 10,
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
            id: 11,
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

                {activeCategory === 'graphic' && (
                    <div className="work-subcategories">
                        <button className={`filter-btn ${activeSubCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveSubCategory('all')}>All</button>
                        <button className={`filter-btn ${activeSubCategory === 'logos' ? 'active' : ''}`} onClick={() => setActiveSubCategory('logos')}>Logos</button>
                        <button className={`filter-btn ${activeSubCategory === 'posters' ? 'active' : ''}`} onClick={() => setActiveSubCategory('posters')}>Posters</button>
                        <button className={`filter-btn ${activeSubCategory === 'grids' ? 'active' : ''}`} onClick={() => setActiveSubCategory('grids')}>Grids</button>
                    </div>
                )}

                <div className="work-grid animate-grid" key={`${activeCategory}-${activeSubCategory}`}>
                    {filteredWorks.length > 0 ? (
                        filteredWorks.map((work) => (
                            <div key={work.id} className="work-item" onClick={() => handleWorkClick(work)}>
                                <div className="work-image-container">
                                    {work.src ? (
                                        <img src={encodeURI(work.src)} alt={work.title} loading="lazy" />
                                    ) : (
                                        <div className="placeholder-work">
                                            <span>{work.title}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="work-info">
                                    <h4>{work.title}</h4>
                                    <div className="work-meta">
                                        <p>{work.shortDesc || work.description}</p>
                                        {/* Keep arrow for aesthetic, but card click opens modal mainly */}
                                        <span className="work-link-icon">↗</span>
                                    </div>
                                </div>
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
