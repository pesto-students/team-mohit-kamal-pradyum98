import React from 'react';
import './SkillsPage.css'; // Assuming you will have a CSS file for SkillsPage

const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS'
    // ...add more skills as needed
];

const SkillsPage = () => {
    return (
        <div className="skills-container">
            <h1>My Skills</h1>
            <ul className="skills-list">
                {skills.map((skill) => (
                    <li key={skill} className="skill-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsPage;
