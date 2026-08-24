import { useState } from 'react';
import './Skills.css';
import './Contact.css';

const essentials = [
    'Vision Language Action',
    'Robot Navigation',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision'
];

const Skills = () => {
    const [activeItems, setActiveItems] = useState([]);

    const toggleItem = (item) => {
        setActiveItems((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    return (
        <section id="skills" className="section skills">
            <div className="container skills-container">
                <p className="skills-intro">I am familiar with:</p>

                <h3 className="skills-heading">Robots & Edge Hardware</h3>
                <div className="skills-row">
                    <img src="/elements/devices.png" alt="Husky A200, LoCoBot Wx-250, Jetson AGX Orin, Jetson Nano Orin" className="skills-row-image" />
                </div>

                <h3 className="skills-heading">Frameworks & Platforms</h3>
                <div className="skills-row">
                    <img src="/elements/skills-row1.png" alt="ROS Noetic, ROS2 Humble, CUDA, GitHub, PyTorch, Vercel" className="skills-row-image" />
                </div>

                <div className="skills-row">
                    <img src="/elements/skills-row2.png" alt="RViz, Gazebo, TensorFlow, React.js, ONNX, FastAPI" className="skills-row-image" />
                </div>

                <h3 className="skills-heading">& <br />My Everyday Essentials are</h3>
                <div className="skills-row">
                    <ul className="skills-essentials-list">
                        {essentials.map((item) => (
                            <li
                                key={item}
                                className={activeItems.includes(item) ? 'active' : ''}
                                onClick={() => toggleItem(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
            
        </section>
    );
};

export default Skills;
