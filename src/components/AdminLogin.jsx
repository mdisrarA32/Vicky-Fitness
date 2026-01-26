import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUserShield } from 'react-icons/fa';
import './Admin.css';

const AdminLogin = ({ setView }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Demo password: "admin"
        if (password === 'admin') {
            setView('admin-dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <section className="admin-login-section">
            <motion.div
                className="login-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="login-header">
                    <div className="admin-icon">
                        <FaUserShield />
                    </div>
                    <h2>Admin Portal</h2>
                    <p>Secure Login</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={error ? 'error-border' : ''}
                        />
                    </div>
                    {error && <p className="error-msg">{error}</p>}

                    <motion.button
                        type="submit"
                        className="btn-primary full-width"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        LOGIN
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default AdminLogin;
