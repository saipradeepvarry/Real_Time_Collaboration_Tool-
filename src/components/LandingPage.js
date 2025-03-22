import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="jumbotron">
                <h1 className="title">Welcome to <span>CollabTool</span></h1>
                <p className="subtitle">
                    Seamless real-time collaboration. Work on documents, share ideas, and communicate effortlessly.
                </p>
                <hr className="divider" />
                <p className="description">
                    Whether you're working on a team project or organizing thoughts, 
                    CollabTool provides the best features to keep you productive.
                </p>
                <div className="btn-group">
                    <Link to="/register" className="btn btn-primary">Register</Link>
                    <Link to="/login" className="btn btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
