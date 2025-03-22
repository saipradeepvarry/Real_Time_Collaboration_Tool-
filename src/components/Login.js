import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.module.css"; // 🔥 Same CSS as Register

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        const storedUser = JSON.parse(localStorage.getItem(email));

        if (!storedUser || storedUser.password !== password) {
            setError("Invalid email or password.");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
        navigate("/dashboard");
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>🔐 Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn-auth">Login</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    );
};

export default Login;
