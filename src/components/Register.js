import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css"; // 🔥 Both Register & Login will use this file

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!name || !email || !password) {
            setError("All fields are required.");
            return;
        }

        const existingUser = JSON.parse(localStorage.getItem(email));
        if (existingUser) {
            setError("User already exists.");
            return;
        }

        localStorage.setItem(email, JSON.stringify({ name, email, password }));
        setSuccess("Registration successful! Redirecting...");
        
        setTimeout(() => navigate("/login"), 2000);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>🚀 Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Create a strong password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn-auth">Register</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
