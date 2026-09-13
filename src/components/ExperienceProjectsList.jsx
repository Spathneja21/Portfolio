import { useNavigate } from 'react-router-dom';
import './ExperienceProjectsList.css';
import works from '../data/worksData';

const ExperienceProjectsList = () => {
    const navigate = useNavigate();

    const mainItems = works
        .filter((work) => work.category === 'ai' && (work.section === 'experience' || work.section === 'projects'))
        .sort((a, b) => {
            if (a.section !== b.section) return a.section === 'experience' ? -1 : 1;
            return a.order - b.order;
        });

    const otherItems = works
        .filter((work) => work.category === 'ai' && work.section === 'other')
        .sort((a, b) => a.order - b.order);

    const handleWorkClick = (work) => {
        navigate(`/project/${work.id}`);
    };

    return (
        <>
            <div className="wp-entry-list">
                {mainItems.map((item, index) => {
                    const row2Image = item.secondaryImage || (item.homeGallery && item.homeGallery[0]);

                    return (
                        <div className="wp-entry" key={item.id}>
                            <div className="wp-entry-top">
                                <span className="wp-entry-number">{index + 1}</span>
                                <div className="wp-entry-header-col">
                                    <div className="wp-entry-header">
                                        <h3 className="wp-entry-title">{item.title}</h3>
                                        {item.subtitle && <p className="wp-entry-subtitle">{item.subtitle}</p>}
                                        {item.meta && <p className="wp-entry-meta">{item.meta}</p>}
                                    </div>

                                    <div className="wp-entry-row1">
                                        <p className="wp-entry-intro">{item.shortDesc}</p>
                                        {item.src && (
                                            <div className="wp-entry-image">
                                                <img src={encodeURI(item.src)} alt={item.title} loading="lazy" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {(item.bullets || row2Image) && (
                                <div className="wp-entry-row2">
                                    {row2Image && (
                                        <div className="wp-entry-image">
                                            <img src={encodeURI(row2Image)} alt={`${item.title} detail`} loading="lazy" />
                                        </div>
                                    )}
                                    {item.bullets && (
                                        <ul className="wp-entry-bullets">
                                            {item.bullets.map((bullet, i) => (
                                                <li key={i}>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}

                            <div className="wp-entry-cta">
                                <button className="wp-entry-more-btn" onClick={() => handleWorkClick(item)}>
                                    More Details
                                </button>
                            </div>

                            {index < mainItems.length - 1 && <div className="wp-entry-divider" />}
                        </div>
                    );
                })}
            </div>

            {otherItems.length > 0 && (
                <div className="wp-other-projects">
                    <h3 className="wp-other-projects-title">Other Projects</h3>
                    <div className="wp-other-projects-list">
                        {otherItems.map((item) => (
                            <div className="wp-other-project-row" key={item.id}>
                                <h4>{item.title}</h4>
                                <p>{item.shortDesc}</p>
                                <span
                                    className="wp-other-project-link"
                                    onClick={() => handleWorkClick(item)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') handleWorkClick(item);
                                    }}
                                    style={{ cursor: 'none' }}
                                >
                                    Get more details --&gt;
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ExperienceProjectsList;
