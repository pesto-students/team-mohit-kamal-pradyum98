import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import SkillsPage from './components/SkillsPage';
import './App.css';
import ProjectDetails from './components/ProjectDetails';

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:projectId" element={<ProjectDetails />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/skills" element={<SkillsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
