import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaAppleAlt, FaDumbbell, FaUsers, FaIdCard } from 'react-icons/fa';
import img1 from '../assets/hero_bg.png';
import img2 from '../assets/trainer_1.png';
import img3 from '../assets/class_cardio.png';
import img4 from '../assets/class_strength.png';
import img5 from '../assets/trainer_2.png'; // Group class vibe or similar
import img6 from '../assets/trainer_3.png'; // Membership/Coach vibe
import './WhyChooseUs.css';

const featuresData = [
    {
        id: 1,
        icon: <FaShieldAlt />,
        title: 'Clean, Safe & Friendly Environment',
        desc: 'We create an environment where everyone motivated goals.',
        image: img1
    },
    {
        id: 2,
        icon: <FaChartLine />,
        title: 'Progress Tracking & Results',
        desc: 'Fitness center offers tools and personalized tracking systems.',
        image: img2
    },
    {
        id: 3,
        icon: <FaAppleAlt />,
        title: 'Nutrition & Wellness Guidance',
        desc: 'Achieving your fitness goals goes beyond nutrition & wellness.',
        image: img3
    },
    {
        id: 4,
        icon: <FaDumbbell />,
        title: 'State-of-the-Art Equipment',
        desc: 'Gym is equipped with the latest, high-quality machines.',
        image: img4
    },
    {
        id: 5,
        icon: <FaUsers />,
        title: 'Group Classes & Personal Training',
        desc: 'Whether you thrive in motivating group environment.',
        image: img5
    },
    {
        id: 6,
        icon: <FaIdCard />,
        title: 'Flexible Membership Plans',
        desc: 'We offer a variety of membership options to monthly passes.',
        image: img6
    }
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us" id="features">
            <div className="container">
                <div className="section-header center">
                    <span className="section-subtitle">Why Choose Us</span>
                    <h2 className="section-title">WE BUILD <span className="accent">CHAMPIONS</span></h2>
                </div>

                <div className="features-grid">
                    {featuresData.map((feature) => (
                        <motion.div
                            key={feature.id}
                            className="feature-card"
                            initial="rest"
                            whileHover="hover"
                            whileTap="hover" // For mobile
                            animate="rest"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="feature-bg"
                                loading="lazy"
                            />
                            <div className="feature-overlay"></div>

                            <div className="feature-content">
                                <motion.div
                                    className="feature-icon"
                                    variants={{
                                        rest: { scale: 1, opacity: 1 },
                                        hover: { scale: 0.8, opacity: 0.8 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    {feature.icon}
                                </motion.div>

                                <motion.h3
                                    className="feature-title"
                                    variants={{
                                        rest: { y: 0 },
                                        hover: { y: -10 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    {feature.title}
                                </motion.h3>

                                <motion.p
                                    className="feature-desc"
                                    variants={{
                                        rest: { opacity: 0, height: 0, marginTop: 0 },
                                        hover: { opacity: 1, height: 'auto', marginTop: 15 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    {feature.desc}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
