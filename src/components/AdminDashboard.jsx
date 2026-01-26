import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTachometerAlt, FaEnvelopeOpenText, FaPenSquare, FaSignOutAlt, FaSearch, FaTrash, FaCheck, FaExclamationCircle } from 'react-icons/fa';
import './Admin.css';

const AdminDashboard = ({ setView }) => {
    const [activeTab, setActiveTab] = useState('feedback');
    const [feedbacks, setFeedbacks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [stats, setStats] = useState({ total: 0, new: 0 });

    useEffect(() => {
        // Load feedback from local storage
        const storedFeedback = JSON.parse(localStorage.getItem('gymFeedback')) || [];
        setFeedbacks(storedFeedback);
        updateStats(storedFeedback);
    }, []);

    const updateStats = (data) => {
        setStats({
            total: data.length,
            new: data.filter(item => item.status === 'New').length
        });
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            const updated = feedbacks.filter(item => item.id !== id);
            setFeedbacks(updated);
            localStorage.setItem('gymFeedback', JSON.stringify(updated));
            updateStats(updated);
        }
    };

    const handleStatusUpdate = (id, newStatus) => {
        const updated = feedbacks.map(item =>
            item.id === id ? { ...item, status: newStatus } : item
        );
        setFeedbacks(updated);
        localStorage.setItem('gymFeedback', JSON.stringify(updated));
        updateStats(updated);
    };

    const filteredFeedback = feedbacks.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <div className="admin-sidebar">
                <div className="sidebar-header">
                    <h3>VICKY<span className="accent">ADMIN</span></h3>
                </div>
                <ul className="sidebar-menu">
                    <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
                        <FaTachometerAlt /> Dashboard
                    </li>
                    <li className={activeTab === 'feedback' ? 'active' : ''} onClick={() => setActiveTab('feedback')}>
                        <FaEnvelopeOpenText /> Feedback
                        {stats.new > 0 && <span className="notification-badge">{stats.new}</span>}
                    </li>
                    <li className={activeTab === 'blogs' ? 'active' : ''} onClick={() => setActiveTab('blogs')}>
                        <FaPenSquare /> Blogs
                    </li>
                </ul>
                <button className="logout-btn" onClick={() => setView('home')}>
                    <FaSignOutAlt /> Logout
                </button>
            </div>

            {/* Main Content */}
            <div className="admin-content">
                <div className="content-header">
                    <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Overview</h2>
                    <div className="admin-profile">
                        <span>Admin User</span>
                        <div className="avatar">A</div>
                    </div>
                </div>

                <div className="content-body">
                    {activeTab === 'dashboard' && (
                        <div className="dashboard-stats-grid">
                            <div className="stat-card">
                                <h3>Total Messages</h3>
                                <p className="stat-number">{stats.total}</p>
                            </div>
                            <div className="stat-card accent">
                                <h3>New Messages</h3>
                                <p className="stat-number">{stats.new}</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'feedback' && (
                        <div className="feedback-manager">
                            <div className="feedback-controls">
                                <div className="search-box">
                                    <FaSearch />
                                    <input
                                        type="text"
                                        placeholder="Search by name or email..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="feedback-list">
                                <AnimatePresence>
                                    {filteredFeedback.length > 0 ? (
                                        filteredFeedback.map(item => (
                                            <motion.div
                                                key={item.id}
                                                className={`feedback-card ${item.status === 'New' ? 'new-message' : ''}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, height: 0 }}
                                                layout
                                            >
                                                <div className="feedback-header">
                                                    <div>
                                                        <h4>{item.name}</h4>
                                                        <span className="feedback-email">{item.email}</span>
                                                    </div>
                                                    <div className="feedback-meta">
                                                        <span className="feedback-date">{item.date}</span>
                                                        <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
                                                    </div>
                                                </div>
                                                <p className="feedback-msg">{item.message}</p>
                                                {item.phone && <p className="feedback-phone">Phone: {item.phone}</p>}

                                                <div className="feedback-actions">
                                                    {item.status !== 'Resolved' && (
                                                        <button
                                                            className="action-btn success"
                                                            onClick={() => handleStatusUpdate(item.id, 'Resolved')}
                                                            title="Mark as Resolved"
                                                        >
                                                            <FaCheck /> Resolve
                                                        </button>
                                                    )}
                                                    {item.status === 'New' && (
                                                        <button
                                                            className="action-btn info"
                                                            onClick={() => handleStatusUpdate(item.id, 'Read')}
                                                            title="Mark as Read"
                                                        >
                                                            <FaExclamationCircle /> Mark Read
                                                        </button>
                                                    )}
                                                    <button
                                                        className="action-btn danger"
                                                        onClick={() => handleDelete(item.id)}
                                                        title="Delete"
                                                    >
                                                        <FaTrash /> Delete
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <p className="no-data">No feedback found.</p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    )}

                    {activeTab === 'blogs' && (
                        <div className="placeholder-content">
                            <h3>Blog Management</h3>
                            <p>Coming Soon...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
