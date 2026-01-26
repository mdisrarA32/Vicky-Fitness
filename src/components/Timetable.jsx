import React from 'react';
import { motion } from 'framer-motion';
import { FaRunning, FaChild, FaDumbbell, FaHeartbeat } from 'react-icons/fa';
import './Timetable.css';

const warmUpCategories = [
    {
        id: 1,
        title: 'Light Cardio Activation',
        desc: 'Prepare the body and gradually increase heart rate.',
        icon: <FaHeartbeat />,
        exercises: ['Brisk walking or light jogging', 'Cycling', 'Jumping jacks (low intensity)'],
    },
    {
        id: 2,
        title: 'Joint Mobility',
        desc: 'Improve joint movement and reduce stiffness.',
        icon: <FaChild />,
        exercises: ['Neck rotations', 'Shoulder circles', 'Elbow & wrist mobility', 'Hip, knee, and ankle rotations'],
    },
    {
        id: 3,
        title: 'Dynamic Stretching',
        desc: 'Loosen muscles using controlled movements.',
        icon: <FaRunning />,
        exercises: ['Arm swings', 'Leg swings', 'Torso twists', 'Hip openers'],
    },
    {
        id: 4,
        title: 'Muscle Activation',
        desc: 'Activate key muscle groups before training.',
        icon: <FaDumbbell />,
        exercises: ['Glute bridges', 'Bodyweight squats', 'Plank hold', 'Shoulder activation movements'],
    },
];

const weeklyFocus = [
    { focus: 'Cardio Warm-Up', mon: 'Light Cardio', tue: 'Joint Mobility', wed: 'Light Cardio', thu: 'Joint Mobility', fri: 'Light Cardio', sat: 'Full Body Warm-Up', sun: 'Rest' },
    { focus: 'Mobility & Stretch', mon: 'Dynamic Stretch', tue: 'Yoga Flow', wed: 'Dynamic Stretch', thu: 'Yoga Flow', fri: 'Dynamic Stretch', sat: 'Stretch & Breath', sun: 'Rest' },
    { focus: 'Strength Prep', mon: 'Muscle Activation', tue: 'Resistance Bands', wed: 'Muscle Activation', thu: 'Resistance Bands', fri: 'Muscle Activation', sat: 'Open Warm-Up', sun: 'Rest' },
    { focus: 'Conditioning Prep', mon: 'Core Activation', tue: 'Balance Work', wed: 'Core Activation', thu: 'Balance Work', fri: 'Core Activation', sat: 'Light Conditioning', sun: 'Rest' },
];

const Timetable = () => { // Kept name Timetable to match file/imports, essentially WarmUpSection
    return (
        <section className="warmup-section" id="timetable">
            <div className="container">
                <div className="section-header center">
                    <span className="section-subtitle">Preparation</span>
                    <h2 className="section-title">WARM-UP <span className="accent">EXERCISES</span></h2>
                    <p className="warmup-intro">
                        Proper body preparation before any workout is essential for injury prevention, joint mobility,
                        and peak performance. This routine is suitable for beginners, intermediate, and pro athletes.
                    </p>
                </div>

                <div className="warmup-grid">
                    {warmUpCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className="warmup-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="warmup-icon">{category.icon}</div>
                            <h3>{category.title}</h3>
                            <p className="warmup-category-desc">{category.desc}</p>
                            <ul className="warmup-list">
                                {category.exercises.map((ex, idx) => (
                                    <li key={idx}>&bull; {ex}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="weekly-schedule-container">
                    <h3 className="table-title">Weekly Warm-Up Focus</h3>
                    <div className="table-responsive">
                        <table className="warmup-table">
                            <thead>
                                <tr>
                                    <th>Focus</th>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                                    <th>Sun</th>
                                </tr>
                            </thead>
                            <tbody>
                                {weeklyFocus.map((row, index) => (
                                    <tr key={index}>
                                        <td className="focus-col">{row.focus}</td>
                                        <td>{row.mon}</td>
                                        <td>{row.tue}</td>
                                        <td>{row.wed}</td>
                                        <td>{row.thu}</td>
                                        <td>{row.fri}</td>
                                        <td>{row.sat}</td>
                                        <td>{row.sun}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="warmup-footer">
                    <div className="usage-guidance">
                        <h4>🧭 Usage Guidance</h4>
                        <ul>
                            <li>Perform warm-up for <strong>10–15 minutes</strong> before every workout</li>
                            <li>Suitable before: Strength training, Bodybuilding, Cardio, CrossFit</li>
                            <li>Trainers may adjust exercises based on individual fitness levels and goals</li>
                        </ul>
                    </div>
                    <p className="disclaimer">
                        ⚠️ <strong>Disclaimer:</strong> Warm-up exercises are general guidelines and may be modified by trainers based on individual fitness levels or injuries.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Timetable;
