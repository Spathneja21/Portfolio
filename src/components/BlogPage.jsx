import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';
import works from '../data/worksData';
import './BlogPage.css';

const blogWorks = works
    .filter((work) => work.category === 'blogs')
    .sort((a, b) => a.id - b.id);

const BlogPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />
            <section className="section">
                <div className="container blog-page-container">
                    {/* <h2>My <span className="blog-page-text">B</span>logs_</h2> */}
                    <p className="blog-page-intro blog-page-animate">
                        I like to <i><strong>document</strong></i> my work and share my knowledge. It helps to organize my work better and also helps others to learn from my mistakes and successes.
                    </p>

                    <div className="blog-page-list blog-page-animate">
                        {blogWorks.length > 0 ? (
                            blogWorks.map((work) => (
                                <div
                                    key={work.id}
                                    className="blog-page-item"
                                    onClick={() => navigate(`/project/${work.id}`)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') navigate(`/project/${work.id}`);
                                    }}
                                    style={{ cursor: 'none' }}
                                >
                                    <div className="blog-page-info">
                                        <h4>{work.title}</h4>
                                        <p>{work.shortDesc || work.description}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="blog-page-empty">No blog posts yet — check back soon.</p>
                        )}
                    </div>

                    <p className="blog-page-substack-cta">
                         To get updates of the blogs, join my Substack account
                    </p>

                    <a
                        href="https://substack.com/@shubhampathneja21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn blog-page-substack-btn"
                    >
                        Join Substack
                    </a>
                </div>
            </section>
            <Contact />
        </div>
    );
};

export default BlogPage;
