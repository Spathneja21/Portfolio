import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import works from '../data/worksData';
import './ProjectPage.css';

const ProjectPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = works.find(w => w.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="pp-not-found">
                <span className="pp-not-found-icon">404</span>
                <h2>Project not found</h2>
                <button className="pp-back-pill" onClick={() => navigate('/')}>← Back to Portfolio</button>
            </div>
        );
    }

    const categoryLabel = project.category === 'ai' ? 'Development' : 'Design';

    return (
        <article className="pp-root">

            {/* ── Sticky top bar ── */}
            <header className="pp-topbar">
                <button className="pp-back-pill" onClick={() => navigate(-1)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back
                </button>
                <span className="pp-topbar-title">{project.title}</span>
                {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="pp-topbar-link">
                        View Project ↗
                    </a>
                )}
            </header>

            {/* ── Full-width hero banner ── */}
            {project.src && (
                <div className="pp-hero-banner">
                    <img src={encodeURI(project.src)} alt={project.title} />
                    <div className="pp-hero-overlay" />
                </div>
            )}

            {/* ── Blog post body ── */}
            <div className="pp-body">

                {/* Post meta row */}
                <div className="pp-meta-row">
                    <span className="pp-category-badge">{categoryLabel}</span>
                    {project.tags && project.tags.map((tag, i) => (
                        <span key={i} className="pp-tag">{tag}</span>
                    ))}
                </div>

                {/* Title */}
                <h1 className="pp-title">{project.title}</h1>

                {/* Lead / subtitle */}
                {project.shortDesc && (
                    <p className="pp-lead">{project.shortDesc}</p>
                )}

                {/* Divider */}
                <div className="pp-rule" />

                {/* Body copy */}
                {project.description ? (
                    <div className="pp-content">
                        {project.description.split('\n').map((line, i) =>
                            line.trim() && <p key={i}>{line.trim()}</p>
                        )}
                    </div>
                ) : (
                    <div className="pp-content">
                        <p>Project details coming soon. Stay tuned!</p>
                    </div>
                )}

                {/* CTA */}
                {project.link && project.link !== '#' && (
                    <div className="pp-cta-row">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="pp-cta-btn">
                            Open Project <span aria-hidden>↗</span>
                        </a>
                    </div>
                )}

                {/* Bottom nav */}
                <div className="pp-footer-nav">
                    <button className="pp-back-pill" onClick={() => navigate(-1)}>
                        ← Back to Portfolio
                    </button>
                </div>

            </div>
        </article>
    );
};

export default ProjectPage;
