import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaCalendarAlt, FaClock, FaTimes } from 'react-icons/fa';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        goal: 'free_trial'
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            console.log('Free Trial Request:', formData);
            setIsSubmitted(true);
        }, 1000);
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', date: '', time: '', goal: 'free_trial' });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-backdrop" onClick={handleClose}>
                    <motion.div
                        className="modal-container"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-modal-btn" onClick={handleClose}>
                            <FaTimes />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="modal-header">
                                    <h2>Start Your <span className="accent">Free Trial</span></h2>
                                    <p>Experience the best gym in Motihari today!</p>
                                </div>

                                <form className="modal-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <FaUser className="input-icon" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            autoFocus
                                        />
                                    </div>
                                    <div className="form-group">
                                        <FaEnvelope className="input-icon" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <FaCalendarAlt className="input-icon" />
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <FaClock className="input-icon" />
                                            <select
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled>Preferred Time</option>
                                                <option value="morning">Morning</option>
                                                <option value="afternoon">Afternoon</option>
                                                <option value="evening">Evening</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn-submit-modal">
                                        Book Free Trial
                                    </button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <h3>Thank You!</h3>
                                <p>Our team will contact you shortly to confirm your free trial.</p>
                                <button className="btn-submit-modal" onClick={handleClose}>Close</button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
