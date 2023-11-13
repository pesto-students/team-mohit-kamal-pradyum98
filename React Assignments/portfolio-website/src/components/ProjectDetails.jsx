import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

// Dummy data array for projects
const projects = [
    {
        id: '1',
        title: 'Project One',
        description: 'Detailed description of Project One...',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: '2',
        title: 'Project Two',
        description: 'Detailed description of Project Two...',
        imageUrl: 'https://via.placeholder.com/150'
    }
];

const ProjectDetails = () => {
    let { projectId } = useParams();
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-details">
            <h2>{project.title}</h2>
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectDetails;
