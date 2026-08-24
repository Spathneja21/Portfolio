import React, { useEffect } from 'react';
import Navbar from './Navbar';
import WorkPageContent from './WorkPageContent';
import Contact from './Contact';
import './WorkPage.css';

const WorkPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="work-page">
            <Navbar />
            <WorkPageContent />
            <Contact />
        </div>
    );
};

export default WorkPage;
