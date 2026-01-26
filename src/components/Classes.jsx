import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes, FaCheckCircle } from 'react-icons/fa';
import strengthImg from '../assets/class_strength.png';
import cardioImg from '../assets/class_cardio.png';
import './Classes.css';

const classesData = [
    {
        id: '01',
        title: 'Strength Training',
        desc: 'Focuses on building muscle mass and improving endurance.',
        intro: 'Strength Training is designed to help you build muscle, increase strength, and improve overall body performance. This program is suitable for beginners who want to start weight training as well as advanced lifters aiming for muscle growth and power.',
        targetAudience: [
            'Beginners starting gym for the first time',
            'People who want muscle gain',
            'Professionals focusing on strength and physique'
        ],
        achievements: [
            'Increased muscle mass',
            'Better posture and body shape',
            'Improved bone density and metabolism',
            'Boost in confidence and physical power'
        ],
        trainingIncludes: [
            'Compound exercises (squat, bench press, deadlift)',
            'Machine & free-weight workouts',
            'Core strengthening for stability',
            'Progressive overload techniques'
        ],
        conclusion: '👉 Perfect for anyone serious about muscle building and strength development.',
        image: strengthImg,
    },
    {
        id: '02',
        title: 'Functional Training',
        desc: 'Improves daily movement patterns and overall body coordination.',
        intro: 'Functional Training focuses on real-life movements that help your body move better in daily activities. Instead of only lifting heavy weights, this program improves balance, flexibility, coordination, and mobility.',
        targetAudience: [
            'Beginners who want safe workouts',
            'Office workers & daily routine fatigue',
            'Athletes & fitness enthusiasts',
            'People recovering from injuries'
        ],
        achievements: [
            'Better body control and balance',
            'Reduced injury risk',
            'Improved flexibility and mobility',
            'Stronger core and joints'
        ],
        trainingIncludes: [
            'Bodyweight exercises',
            'Resistance bands & kettlebells',
            'Balance and mobility drills',
            'Joint-strengthening movements'
        ],
        conclusion: '👉 Best for those who want fitness that helps in everyday life, not just muscles.',
        image: cardioImg,
    },
    {
        id: '03',
        title: 'CrossFit Training',
        desc: 'High-intensity fitness program incorporating elements from several sports.',
        intro: 'CrossFit is a high-intensity training program that combines strength, cardio, endurance, and agility in one workout. Each session is challenging, energetic, and results-driven.',
        targetAudience: [
            'Intermediate to advanced gym users',
            'People who enjoy intense workouts',
            'Athletes & competitive fitness lovers',
            'Anyone looking for fast results'
        ],
        achievements: [
            'Fat loss and muscle gain together',
            'High stamina and endurance',
            'Mental toughness and discipline',
            'Full-body athletic performance'
        ],
        trainingIncludes: [
            'High-intensity interval workouts',
            'Olympic lifts & functional movements',
            'Bodyweight and cardio circuits',
            'Group-based training for motivation'
        ],
        conclusion: '👉 Ideal for those who want serious transformation and performance fitness.',
        image: strengthImg,
    },
    {
        id: '04',
        title: 'Cardio Training',
        desc: 'Boosts heart health and burns calories through running, cycling, or HIIT.',
        intro: 'Cardio Training focuses on improving heart health, stamina, and fat burning. This program is essential for weight loss, endurance building, and overall health improvement.',
        targetAudience: [
            'Beginners starting fitness journey',
            'Weight loss seekers',
            'People with sedentary lifestyle',
            'Anyone wanting better heart health'
        ],
        achievements: [
            'Improved heart & lung capacity',
            'Faster calorie and fat burning',
            'Increased energy levels',
            'Better stamina and endurance'
        ],
        trainingIncludes: [
            'Treadmill, cycling, rowing',
            'HIIT (High Intensity Interval Training)',
            'Skipping & body-movement cardio',
            'Fat-burn and endurance sessions'
        ],
        conclusion: '👉 Best choice for weight loss, prevent lifestyle diseases, and staying active.',
        image: cardioImg,
    },
];

const Classes = () => {
    const [selectedClass, setSelectedClass] = useState(null);

    return (
        <section className="classes-section-new" id="classes">
            <div className="container">
                {classesData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`class-row ${index % 2 !== 0 ? 'reverse' : ''}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="class-text-side">
                            <span className="class-number">{item.id}</span>
                            <h2 className="class-title">{item.title}</h2>
                            <p className="class-desc">{item.desc}</p>

                            {/* Show only first 3 training items as preview features */}
                            <ul className="class-features">
                                {item.trainingIncludes.slice(0, 3).map((feature, idx) => (
                                    <li key={idx}>&bull; {feature}</li>
                                ))}
                            </ul>

                            <button
                                className="btn-read-more"
                                onClick={() => setSelectedClass(item)}
                            >
                                Read More <FaArrowRight className="arrow-icon" />
                            </button>
                        </div>

                        <div className="class-image-side">
                            <div
                                className="class-image-bg"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedClass && (
                    <motion.div
                        className="class-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedClass(null)}
                    >
                        <motion.div
                            className="class-modal expanded"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={() => setSelectedClass(null)}>
                                <FaTimes />
                            </button>

                            <div className="modal-content-scroll">
                                <div className="modal-header-section">
                                    <h3>{selectedClass.title}</h3>
                                    <p className="modal-intro">{selectedClass.intro}</p>
                                </div>

                                <div className="modal-grid-section">
                                    <div className="modal-column">
                                        <h4>Who is this for?</h4>
                                        <ul>
                                            {selectedClass.targetAudience.map((item, idx) => (
                                                <li key={idx}><FaCheckCircle className="check-icon small" /> {item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="modal-column">
                                        <h4>What you will achieve:</h4>
                                        <ul>
                                            {selectedClass.achievements.map((item, idx) => (
                                                <li key={idx}><FaCheckCircle className="check-icon small" /> {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="modal-training-section">
                                    <h4>Training includes:</h4>
                                    <ul>
                                        {selectedClass.trainingIncludes.map((item, idx) => (
                                            <li key={idx}><FaCheckCircle className="check-icon small" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="modal-footer-note">
                                    <p>{selectedClass.conclusion}</p>
                                    <button className="btn-modal-join">Join This Program</button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Classes;
