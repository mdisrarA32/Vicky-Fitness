import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import trainer1 from '../assets/trainer_1.png';
import trainer2 from '../assets/trainer_2.png';
import trainer3 from '../assets/trainer_3.png';
import './Trainers.css';

const trainersData = [
    {
        id: 1,
        name: 'Vikram Singh',
        role: 'Head Trainer',
        image: trainer1,
        social: ['#', '#', '#']
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Yoga & Cardio',
        image: trainer2,
        social: ['#', '#', '#']
    },
    {
        id: 3,
        name: 'Rahul Kumar',
        role: 'Bodybuilding',
        image: trainer3,
        social: ['#', '#', '#']
    }
];

const Trainers = () => {
    return (
        <section className="trainers-section" id="trainers">
            <div className="container">
                <div className="section-header center">
                    <span className="section-subtitle">Expert Team</span>
                    <h2 className="section-title">MEET OUR <span className="accent">TRAINERS</span></h2>
                </div>

                <div className="trainers-grid">
                    {trainersData.map((trainer) => (
                        <motion.div
                            key={trainer.id}
                            className="trainer-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: trainer.id * 0.1 }}
                        >
                            <div className="trainer-image-container">
                                <img src={trainer.image} alt={trainer.name} className="trainer-image" />
                                <div className="trainer-overlay">
                                    <div className="social-links">
                                        <a href={trainer.social[0]} className="social-icon"><FaInstagram /></a>
                                        <a href={trainer.social[1]} className="social-icon"><FaTwitter /></a>
                                        <a href={trainer.social[2]} className="social-icon"><FaFacebookF /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="trainer-info">
                                <h3>{trainer.name}</h3>
                                <p>{trainer.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
