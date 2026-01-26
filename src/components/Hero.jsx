import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png';
import './Hero.css';

const Hero = () => {
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleJoinClick = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });

            // Add flash highlight effect
            const cards = document.querySelectorAll('.pricing-card');
            cards.forEach(card => card.classList.add('flash-highlight'));

            // Remove class after animation
            setTimeout(() => {
                cards.forEach(card => card.classList.remove('flash-highlight'));
            }, 4500); // 1.5s * 3 iterations
        }
    };

    return (
        <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="overlay"></div>
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="sub-headline"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        BECOME THE BEST VERSION OF YOURSELF
                    </motion.p>
                    <motion.h1
                        className="headline"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        MOTIHARI’S MOST <span className="stroke-text">TRUSTED</span> FITNESS DESTINATION
                    </motion.h1>
                    <motion.div
                        className="cta-group"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <button className="btn-hero primary" onClick={handleJoinClick}>Join Now</button>
                        <button className="btn-hero secondary" onClick={() => handleScrollTo('booking')}>Book Free Trial</button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
