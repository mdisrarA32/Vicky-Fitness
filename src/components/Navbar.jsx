import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ setView, currentView }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (link) => {
        setIsOpen(false);
        if (link.name === 'Blog') {
            setView('blog');
            window.scrollTo(0, 0);
        } else if (link.name === 'Contact') {
            setView('contact');
            window.scrollTo(0, 0);
        } else if (link.name === 'Home') {
            setView('home');
            window.scrollTo(0, 0); // Optional: scroll to top
        } else {
            // For other links
            if (currentView !== 'home') {
                setView('home');
                // Allow state update to render home before scrolling
                setTimeout(() => {
                    const element = document.getElementById(link.href.substring(1));
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                // If already on home, just scroll
                const element = document.getElementById(link.href.substring(1));
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Classes', href: '#classes' },
        { name: 'Trainers', href: '#trainers' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#' }, // Changed to routing, href # prevents default reload
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo" onClick={() => { setView('home'); window.scrollTo(0, 0); }}>
                    <h1>VICKY<span className="accent">FITNESS</span></h1>
                </div>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`nav-link ${(currentView === 'blog' && link.name === 'Blog') ||
                                (currentView === 'contact' && link.name === 'Contact')
                                ? 'active' : ''
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(link);
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="btn-primary" onClick={() => {
                        setView('home');
                        setTimeout(() => {
                            const pricingElement = document.getElementById('pricing');
                            if (pricingElement) {
                                pricingElement.scrollIntoView({ behavior: 'smooth' });
                                const cards = document.querySelectorAll('.pricing-card');
                                cards.forEach(card => card.classList.add('flash-highlight'));
                                setTimeout(() => {
                                    cards.forEach(card => card.classList.remove('flash-highlight'));
                                }, 4500);
                            }
                        }, 100);
                    }}>Join Now</button>
                </div>

                <div className="mobile-toggle" onClick={() => setIsOpen(true)}>
                    <FaBars />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="mobile-menu-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            className="mobile-menu-drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <div className="drawer-header">
                                <h2>Menu</h2>
                                <button className="close-btn" onClick={() => setIsOpen(false)}>
                                    <FaTimes />
                                </button>
                            </div>

                            <div className="drawer-links">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="mobile-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link);
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <button className="btn-primary drawer-cta" onClick={() => {
                                    setIsOpen(false);
                                    setView('home');
                                    setTimeout(() => {
                                        const pricingElement = document.getElementById('pricing');
                                        if (pricingElement) pricingElement.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                }}>Join Now</button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
