import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaRegClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate saving to database (localStorage) for Admin Dashboard
        const newFeedback = {
            id: Date.now(),
            ...formData,
            date: new Date().toLocaleString(),
            status: 'New'
        };

        const existingFeedback = JSON.parse(localStorage.getItem('gymFeedback')) || [];
        localStorage.setItem('gymFeedback', JSON.stringify([newFeedback, ...existingFeedback]));

        console.log('Feedback Submitted:', newFeedback);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });

        // Alert handled by UI state now, but keeping console for debug
        setTimeout(() => setSubmitted(false), 5000);
    };

    const whatsappMessage = encodeURIComponent(
        "Hello Vicky Fitness Team 👋\nI’m interested in joining the gym and would like more details about memberships, training programs, and free trials.\nPlease guide me. Thank you! 💪"
    );

    return (
        <section className="contact-page" id="contact">
            <div className="container contact-container">
                {/* Left Column: Contact Info & Map */}
                <motion.div
                    className="contact-info-column"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header left-align">
                        <span className="section-subtitle">Get In Touch</span>
                        <h2 className="section-title">CONTACT <span className="accent">US</span></h2>
                        <p className="contact-desc">
                            We are here to help you achieve your fitness goals. Reach out to us via any of the platforms below or visit our gym.
                        </p>
                    </div>

                    <div className="contact-details">
                        <div className="detail-item">
                            <div className="icon-box"><FaMapMarkerAlt /></div>
                            <div>
                                <h4>Location</h4>
                                <p>Arya Samaj Chowk, Chhatauni, Motihari, Bihar 845401</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="icon-box"><FaRegClock /></div>
                            <div>
                                <h4>Business Hours</h4>
                                <p>Mon - Sat: 5:00 AM - 10:00 PM<br />Sun: 6:00 AM - 12:00 PM</p>
                            </div>
                        </div>

                        <a
                            href={`https://wa.me/917050382717?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="detail-item action-link"
                        >
                            <div className="icon-box whatsapp"><FaWhatsapp /></div>
                            <div>
                                <h4>WhatsApp (Chat Now)</h4>
                                <p>+91 70503 82717</p>
                            </div>
                        </a>

                        <a href="mailto:contact@vickyfitness.com" className="detail-item action-link">
                            <div className="icon-box email"><FaEnvelope /></div>
                            <div>
                                <h4>Email Us</h4>
                                <p>contact@vickyfitness.com</p>
                            </div>
                        </a>

                        <a
                            href="https://www.instagram.com/vicky__fitness07/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="detail-item action-link"
                        >
                            <div className="icon-box instagram"><FaInstagram /></div>
                            <div>
                                <h4>Follow on Instagram</h4>
                                <p>@vicky__fitness07</p>
                            </div>
                        </a>
                    </div>

                    <div className="map-embed">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113996.38830737233!2d84.8465!3d26.6476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399335bdd87c7bb5%3A0x6e26725848529341!2sMotihari%2C%20Bihar!5e0!3m2!1sen!2sin!4v1645511520000!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(90%)' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Gym Location"
                        ></iframe>
                    </div>
                </motion.div>

                {/* Right Column: Feedback Form */}
                <motion.div
                    className="contact-form-column"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3>Drop Us a Message</h3>
                        <p className="form-subtitle">Have a question or feedback? We'd love to hear from you.</p>

                        {submitted && (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Thank you for your feedback! We appreciate your response.
                            </motion.div>
                        )}

                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number (Optional)</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+91 98765 43210"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Message / Feedback</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Tell us what you think..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="btn-primary full-width"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            SEND FEEDBACK
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
