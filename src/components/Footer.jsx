import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ setView }) => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <div className="footer-logo">
                        <h2>VICKY<span className="accent">FITNESS</span></h2>
                    </div>
                    <p className="footer-desc">
                        Motihari's premier fitness destination. We are committed to helping you achieve your fitness goals with expert guidance and top-notch facilities.
                    </p>
                    <div className="footer-socials">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#classes">Classes</a></li>
                        <li><a href="#trainers">Trainers</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact Info</h3>
                    <ul className="footer-links">
                        <li>Arya Samaj Chowk, Chhatauni</li>
                        <li>Motihari, Bihar 845401</li>
                        <li>Phone: 070503 82717</li>
                        <li>Email: info@vickyfitness.com</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Opening Hours</h3>
                    <ul className="footer-links">
                        <li>Mon - Sat: 5:30 AM - 10:00 PM</li>
                        <li>Sunday: 6:00 AM - 9:00 PM</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} Vicky Fitness. All Rights Reserved.
                    <span
                        style={{ cursor: 'pointer', opacity: 0.3, marginLeft: '10px' }}
                        onClick={() => { setView('admin-login'); window.scrollTo(0, 0); }}
                    >Admin</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
