import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { FaStar, FaGoogle } from 'react-icons/fa';
import Marquee from './Marquee';
import './About.css';

const StatCounter = ({ value, label, suffix = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <div className="stat-item" ref={ref}>
            <h3 className="stat-value">{displayValue}{suffix}+</h3>
            <p className="stat-label">{label}</p>
        </div>
    );
};

const About = () => {
    return (
        <section className="about-section" id="about">
            <Marquee />
            <div className="container about-container">
                <motion.div
                    className="about-text-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <span className="section-subtitle">Why Choose Us</span>
                        <h2 className="section-title">WE ARE <span className="accent">VICKY FITNESS</span></h2>
                    </div>
                    <p className="about-description">
                        Located in the heart of Motihari, Vicky Fitness is more than just a gym. We are a community dedicated to helping you achieve your fitness goals.
                        With top-tier equipment, expert trainers, and a motivating atmosphere, we provide everything you need to transform your body and mind.
                    </p>

                    <div className="trust-badges">
                        <div className="badge">
                            <FaGoogle className="icon google" />
                            <div>
                                <strong>4.9 Rating</strong>
                                <span>Based on 52 Reviews</span>
                            </div>
                        </div>
                        <div className="badge">
                            <FaStar className="icon star" />
                            <div>
                                <strong>Premium Facility</strong>
                                <span>Modern Equipment</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-stats"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <StatCounter value={500} label="Active Members" />
                    <StatCounter value={5} label="Expert Trainers" />
                    <StatCounter value={10} label="Years Experience" />
                    <StatCounter value={20} label="Classes Weekly" />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
