import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    // 🌙 Dark Mode Toggle
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedMode);
        document.body.classList.toggle('dark-theme', savedMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
        document.body.classList.toggle('dark-theme', newMode);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/dashboard">🚀 CollabTool</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        {/* 🌙 Dark Mode Toggle */}
                        <button className="btn btn-sm btn-outline-secondary me-3" onClick={toggleDarkMode}>
                            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                        </button>

                        {user ? (
                            <div className="nav-item dropdown">
                                <button className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                    {user.username}
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={handleLogout}>🚪 Logout</button></li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
                                <Link className="btn btn-primary" to="/register">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
