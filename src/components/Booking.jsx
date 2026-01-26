import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCalendarAlt, FaClock, FaCommentDots, FaUsers } from 'react-icons/fa';
import bookingBg from '../assets/booking_bg.png';
import './Booking.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save to localStorage for Admin Dashboard
        const newBooking = {
            id: Date.now(),
            ...formData,
            submittedAt: new Date().toLocaleString(),
            status: 'Pending'
        };

        const existingBookings = JSON.parse(localStorage.getItem('gymBookings')) || [];
        localStorage.setItem('gymBookings', JSON.stringify([newBooking, ...existingBookings]));

        console.log('Booking Request:', newBooking);
        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            date: '',
            time: '',
            message: ''
        });

        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section className="booking-section" id="booking">
            <div
                className="booking-bg"
                style={{ backgroundImage: `url(${bookingBg})` }}
            ></div>
            <div className="booking-overlay"></div>

            <div className="container booking-container">
                <motion.div
                    className="booking-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header left">
                        <span className="section-subtitle-badge">BOOK YOUR SEAT</span>
                        <h2 className="section-title">RESERVE YOUR <span className="accent">PLACE</span><br />BOOK YOUR SEAT!</h2>
                    </div>

                    <form className="booking-form" onSubmit={handleSubmit}>
                        {submitted && (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ marginBottom: '20px' }}
                            >
                                Thank you! Your booking request has been received.
                            </motion.div>
                        )}
                        <div className="form-group">
                            <FaUser className="input-icon" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
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
                                    <option value="" disabled>Select Time</option>
                                    <option value="morning_6am">Morning (6:00 AM)</option>
                                    <option value="morning_7am">Morning (7:00 AM)</option>
                                    <option value="evening_5pm">Evening (5:00 PM)</option>
                                    <option value="evening_6pm">Evening (6:00 PM)</option>
                                    <option value="evening_7pm">Evening (7:00 PM)</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <FaCommentDots className="input-icon top-align" />
                            <textarea
                                name="message"
                                placeholder="Message (Optional)"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="btn-book"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            BOOK YOUR SEAT
                        </motion.button>
                    </form>
                </motion.div>


            </div>
        </section>
    );
};

export default Booking;
