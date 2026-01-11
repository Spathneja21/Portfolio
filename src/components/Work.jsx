import React, { useState } from 'react';
import './Work.css';

const Work = () => {
    const [activeCategory, setActiveCategory] = useState('graphic');
    const [activeSubCategory, setActiveSubCategory] = useState('all');

    const works = [
        // Graphic Design - Posters
        { id: 1, category: 'graphic', subcategory: 'posters', src: '/elements/posters/marshM.png', title: 'MarshM', description: 'Poster Design', link: 'https://www.instagram.com/p/DLP_ebBBbKF/?igsh=MWN1ajBjOW9iempwMA==' },
        { id: 2, category: 'graphic', subcategory: 'posters', src: '/elements/posters/simar-01.png', title: 'Simar 01', description: 'Poster Design', link: 'https://www.instagram.com/p/DLSmZVNtky2/?igsh=ZDYzODU3a2o1dTh0' },
        { id: 3, category: 'graphic', subcategory: 'posters', src: '/elements/posters/simar-02.png', title: 'Simar 02', description: 'Poster Design', link: 'https://www.instagram.com/p/DLSmFBoNQNP/?igsh=MXU2dXdxcmtnY216YQ==' },
        { id: 4, category: 'graphic', subcategory: 'posters', src: '/elements/posters/simar-03.png', title: 'Simar 03', description: 'Poster Design', link: 'https://www.instagram.com/p/DLSl0cNNb0z/?igsh=Zmtrc2pmZGFrdWtv' },
        // Graphic Design - Grids
        { id: 5, category: 'graphic', subcategory: 'grids', src: '/elements/grids/Artboard 1 (2).png', title: 'Artboard V2', description: 'Grid Layout', link: 'https://www.instagram.com/p/DQt0aBoEg1B/?igsh=MW80czdsNjR3dnFzdg==' },
        { id: 6, category: 'graphic', subcategory: 'grids', src: '/elements/grids/Artboard 1 (3).png', title: 'Artboard V3', description: 'Grid Layout', link: 'https://www.instagram.com/p/DQpGVqEEjMk/?igsh=MTBhY2lvOGVsazNqbA==' },
        { id: 7, category: 'graphic', subcategory: 'grids', src: '/elements/grids/RECRUITMENT grid full-01.png', title: 'Recruitment Grid', description: 'Grid Layout', link: 'https://www.instagram.com/p/DN-5UFlkpBo/?igsh=MWRwMHl5Yzk0cXN5OA==' },
        { id: 8, category: 'graphic', subcategory: 'grids', src: '/elements/grids/eyes behind the camera.png', title: 'Eyes Behind Camera', description: 'Grid Layout', link: '#' },
        // Placeholders for other categories
        { id: 9, category: 'ai', title: 'AI Project Placeholder', description: 'Coming Soon' },
        { id: 10, category: 'software', title: 'Software Project Placeholder', description: 'Coming Soon' },
    ];

    const filteredWorks = works.filter(work => {
        if (work.category !== activeCategory) return false;
        if (activeCategory === 'graphic' && activeSubCategory !== 'all' && work.subcategory !== activeSubCategory) return false;
        return true;
    });

    const [selectedImage, setSelectedImage] = useState(null);

    const handleWorkClick = (work) => {
        if (work.src) {
            setSelectedImage(work.src);
        }
    };

    return (
        <section id="work" className="section work">
            <div className="work-container">
                <h2>MY <span className="work-text">W</span>ork_</h2>

                <div className="work-categories">
                    <button className={`category-btn ${activeCategory === 'ai' ? 'active' : ''}`} onClick={() => setActiveCategory('ai')}>AI Development</button>
                    <button className={`category-btn ${activeCategory === 'graphic' ? 'active' : ''}`} onClick={() => { setActiveCategory('graphic'); setActiveSubCategory('all'); }}>Graphic Design</button>
                    <button className={`category-btn ${activeCategory === 'software' ? 'active' : ''}`} onClick={() => setActiveCategory('software')}>Software Development</button>
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
                                        <p>{work.description}</p>
                                        {work.link && work.link !== '#' && (
                                            <a href={work.link} target="_blank" rel="noopener noreferrer" className="work-link-icon" onClick={(e) => e.stopPropagation()} title="View Project">
                                                ↗
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-work-message">No projects found in this category yet.</p>
                    )}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
                            <img src={encodeURI(selectedImage)} alt="Full Preview" className="lightbox-image" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Work;
