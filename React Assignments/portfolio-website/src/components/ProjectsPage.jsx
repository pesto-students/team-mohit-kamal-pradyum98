import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css'; // Assuming you have a CSS file for ProjectsPage

const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'This is a short description of Project One.',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'This is a short description of Project Two.',
        imageUrl: 'https://via.placeholder.com/150'
    }
];

const ProjectsPage = () => {
    return (
        <div className="projects-container">
            {projects.map((project) => (
                <div key={project.id} className="project-item">
                    <img src={project.imageUrl} alt={project.title} />
                    <h3>
                        <Link to={`/projects/${project.id}`}>{project.title}</Link>
                    </h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectsPage;
