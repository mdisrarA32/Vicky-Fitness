import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDumbbell, FaFire, FaRunning, FaFistRaised } from 'react-icons/fa';
import './WorkoutPlans.css';

const workoutData = {
    beginner: {
        title: 'Beginner Workout Plan',
        subtitle: 'Foundation Program (6 Days)',
        target: 'First-time gym users & foundation building',
        style: 'Machine-based + Light Free Weights',
        schedule: [
            {
                day: 'Day 1', focus: 'Chest & Triceps', exercises: [
                    { name: 'Machine Chest Press', sets: '3', reps: '12' },
                    { name: 'Dumbbell Bench Press', sets: '3', reps: '10' },
                    { name: 'Chest Fly Machine', sets: '3', reps: '12' },
                    { name: 'Triceps Pushdown', sets: '3', reps: '12' },
                    { name: 'Overhead Dumbbell Extension', sets: '2', reps: '12' },
                ]
            },
            {
                day: 'Day 2', focus: 'Back & Biceps', exercises: [
                    { name: 'Lat Pulldown', sets: '3', reps: '12' },
                    { name: 'Seated Cable Row', sets: '3', reps: '12' },
                    { name: 'One Arm Dumbbell Row', sets: '3', reps: '10' },
                    { name: 'Barbell Curl', sets: '3', reps: '12' },
                    { name: 'Hammer Curl', sets: '2', reps: '12' },
                ]
            },
            {
                day: 'Day 3', focus: 'Legs', exercises: [
                    { name: 'Leg Press', sets: '3', reps: '12' },
                    { name: 'Squats (Bodyweight)', sets: '3', reps: '15' },
                    { name: 'Leg Extension', sets: '3', reps: '12' },
                    { name: 'Leg Curl', sets: '3', reps: '12' },
                    { name: 'Standing Calf Raise', sets: '3', reps: '15' },
                ]
            },
            {
                day: 'Day 4', focus: 'Shoulders', exercises: [
                    { name: 'Dumbbell Shoulder Press', sets: '3', reps: '12' },
                    { name: 'Lateral Raises', sets: '3', reps: '12' },
                    { name: 'Front Raises', sets: '2', reps: '12' },
                    { name: 'Barbell Shrugs', sets: '3', reps: '15' },
                ]
            },
            {
                day: 'Day 5', focus: 'Core & Cardio', exercises: [
                    { name: 'Plank', sets: '3', reps: '30 sec' },
                    { name: 'Crunches', sets: '3', reps: '15' },
                    { name: 'Hanging Leg Raises', sets: '3', reps: '10' },
                    { name: 'Treadmill / Cycling', sets: '—', reps: '20 min' },
                ]
            },
            {
                day: 'Day 6', focus: 'Full Body (Light)', exercises: [
                    { name: 'Push-ups', sets: '3', reps: '10' },
                    { name: 'Lat Pulldown', sets: '3', reps: '12' },
                    { name: 'Dumbbell Squats', sets: '3', reps: '12' },
                    { name: 'Cardio', sets: '—', reps: '15 min' },
                ]
            },
        ]
    },
    intermediate: {
        title: 'Intermediate Workout Plan',
        subtitle: 'Push / Pull Split (6 Days)',
        target: 'Regular gym members with basic experience',
        style: 'Push / Pull Split',
        schedule: [
            {
                day: 'Day 1', focus: 'PUSH (Chest, Shoulders, Triceps)', exercises: [
                    { name: 'Barbell Bench Press', sets: '4', reps: '8' },
                    { name: 'Incline Dumbbell Press', sets: '4', reps: '10' },
                    { name: 'Overhead Barbell Press', sets: '3', reps: '8' },
                    { name: 'Dumbbell Lateral Raises', sets: '4', reps: '12' },
                    { name: 'Triceps Rope Pushdown', sets: '3', reps: '12' },
                    { name: 'Overhead Dumbbell Extension', sets: '3', reps: '10' },
                ]
            },
            {
                day: 'Day 2', focus: 'PULL (Back, Biceps)', exercises: [
                    { name: 'Deadlift', sets: '4', reps: '6' },
                    { name: 'Pull-ups / Lat Pulldown', sets: '4', reps: '8' },
                    { name: 'Barbell Bent-Over Row', sets: '3', reps: '8' },
                    { name: 'Seated Cable Row', sets: '3', reps: '10' },
                    { name: 'Barbell Curl', sets: '3', reps: '10' },
                    { name: 'Hammer Curl', sets: '3', reps: '12' },
                ]
            },
            {
                day: 'Day 3', focus: 'LEGS', exercises: [
                    { name: 'Barbell Back Squat', sets: '4', reps: '8' },
                    { name: 'Leg Press', sets: '3', reps: '10' },
                    { name: 'Romanian Deadlift', sets: '3', reps: '8' },
                    { name: 'Leg Extension', sets: '3', reps: '12' },
                    { name: 'Lying Leg Curl', sets: '3', reps: '12' },
                    { name: 'Standing Calf Raise', sets: '4', reps: '15' },
                ]
            },
            {
                day: 'Day 4', focus: 'PUSH (Volume Focus)', exercises: [
                    { name: 'Dumbbell Bench Press', sets: '4', reps: '10' },
                    { name: 'Incline Machine Press', sets: '3', reps: '12' },
                    { name: 'Dumbbell Shoulder Press', sets: '3', reps: '10' },
                    { name: 'Cable Lateral Raise', sets: '4', reps: '12' },
                    { name: 'Skull Crushers', sets: '3', reps: '10' },
                    { name: 'Bench Dips', sets: '3', reps: '15' },
                ]
            },
            {
                day: 'Day 5', focus: 'PULL (Volume Focus)', exercises: [
                    { name: 'T-Bar Row', sets: '4', reps: '8' },
                    { name: 'Wide Grip Lat Pulldown', sets: '4', reps: '10' },
                    { name: 'One Arm Dumbbell Row', sets: '3', reps: '10' },
                    { name: 'Face Pulls', sets: '3', reps: '12' },
                    { name: 'EZ Bar Curl', sets: '3', reps: '12' },
                    { name: 'Preacher Curl', sets: '3', reps: '10' },
                ]
            },
            {
                day: 'Day 6', focus: 'LEGS + CORE', exercises: [
                    { name: 'Front Squat', sets: '4', reps: '8' },
                    { name: 'Walking Lunges', sets: '3', reps: '12' },
                    { name: 'Seated Leg Curl', sets: '3', reps: '12' },
                    { name: 'Seated Calf Raise', sets: '4', reps: '15' },
                    { name: 'Hanging Leg Raises', sets: '4', reps: '12' },
                    { name: 'Plank Hold', sets: '3', reps: '60 sec' },
                ]
            },
        ]
    },
    pro: {
        powerlifting: {
            title: 'Pro Powerlifting Program',
            subtitle: 'Strength & Power Focus (6 Days)',
            target: 'Advanced lifters & strength athletes',
            style: 'Big 3 Focus (Squat, Bench, Deadlift)',
            schedule: [
                {
                    day: 'Day 1', focus: 'Squat (Heavy)', exercises: [
                        { name: 'Back Squat', sets: '5', reps: '3-5' },
                        { name: 'Pause Squat', sets: '4', reps: '4' },
                        { name: 'Leg Press', sets: '3', reps: '8' },
                        { name: 'Calf Raises', sets: '4', reps: '15' },
                    ]
                },
                {
                    day: 'Day 2', focus: 'Bench Press (Heavy)', exercises: [
                        { name: 'Barbell Bench Press', sets: '5', reps: '3-5' },
                        { name: 'Close Grip Bench', sets: '4', reps: '6' },
                        { name: 'Chest Fly', sets: '3', reps: '12' },
                        { name: 'Triceps Pushdown', sets: '3', reps: '12' },
                    ]
                },
                {
                    day: 'Day 3', focus: 'Deadlift (Heavy)', exercises: [
                        { name: 'Conventional Deadlift', sets: '5', reps: '3' },
                        { name: 'Romanian Deadlift', sets: '4', reps: '6' },
                        { name: 'Lat Pulldown', sets: '3', reps: '10' },
                        { name: 'Barbell Curl', sets: '3', reps: '10' },
                    ]
                },
                {
                    day: 'Day 4', focus: 'Squat (Volume)', exercises: [
                        { name: 'Front Squat', sets: '4', reps: '6' },
                        { name: 'Lunges', sets: '3', reps: '12' },
                        { name: 'Leg Curl', sets: '3', reps: '12' },
                        { name: 'Core Work', sets: '3', reps: '15' },
                    ]
                },
                {
                    day: 'Day 5', focus: 'Bench (Volume)', exercises: [
                        { name: 'Incline Bench Press', sets: '4', reps: '6-8' },
                        { name: 'Dumbbell Press', sets: '3', reps: '10' },
                        { name: 'Skull Crushers', sets: '3', reps: '10' },
                        { name: 'Lateral Raises', sets: '3', reps: '12' },
                    ]
                },
                {
                    day: 'Day 6', focus: 'Deadlift + Conditioning', exercises: [
                        { name: 'Speed Deadlift', sets: '6', reps: '2' },
                        { name: 'Barbell Row', sets: '4', reps: '8' },
                        { name: 'Farmer Walk', sets: '4', reps: '40 m' },
                        { name: 'Plank', sets: '3', reps: '60 sec' },
                    ]
                },
            ]
        },
        split: {
            title: 'Pro Upper / Lower Split',
            subtitle: 'Hypertrophy & Performance (6 Days)',
            target: 'Advanced Hypertrophy + Strength',
            style: 'Upper / Lower Rotation',
            schedule: [
                {
                    day: 'Day 1', focus: 'Upper (Strength)', exercises: [
                        { name: 'Bench Press', sets: '5', reps: '5' },
                        { name: 'Bent-Over Row', sets: '4', reps: '6' },
                        { name: 'Overhead Press', sets: '4', reps: '6' },
                        { name: 'Pull-ups', sets: '3', reps: '8' },
                    ]
                },
                {
                    day: 'Day 2', focus: 'Lower (Strength)', exercises: [
                        { name: 'Back Squat', sets: '5', reps: '5' },
                        { name: 'Romanian Deadlift', sets: '4', reps: '6' },
                        { name: 'Leg Press', sets: '3', reps: '10' },
                        { name: 'Calf Raises', sets: '4', reps: '15' },
                    ]
                },
                {
                    day: 'Day 3', focus: 'Upper (Hypertrophy)', exercises: [
                        { name: 'Incline DB Press', sets: '4', reps: '10' },
                        { name: 'Lat Pulldown', sets: '4', reps: '10' },
                        { name: 'Seated Row', sets: '3', reps: '12' },
                        { name: 'Lateral Raises', sets: '4', reps: '12' },
                    ]
                },
                {
                    day: 'Day 4', focus: 'Lower (Hypertrophy)', exercises: [
                        { name: 'Front Squat', sets: '4', reps: '8' },
                        { name: 'Leg Curl', sets: '3', reps: '12' },
                        { name: 'Walking Lunges', sets: '3', reps: '12' },
                        { name: 'Calf Raises', sets: '4', reps: '15' },
                    ]
                },
                {
                    day: 'Day 5', focus: 'Upper (Arms Focus)', exercises: [
                        { name: 'Close Grip Bench', sets: '4', reps: '8' },
                        { name: 'Barbell Curl', sets: '4', reps: '10' },
                        { name: 'Skull Crushers', sets: '3', reps: '10' },
                        { name: 'Hammer Curl', sets: '3', reps: '12' },
                    ]
                },
                {
                    day: 'Day 6', focus: 'Lower + Core', exercises: [
                        { name: 'Deadlift', sets: '4', reps: '5' },
                        { name: 'Hip Thrust', sets: '3', reps: '10' },
                        { name: 'Hanging Leg Raise', sets: '4', reps: '12' },
                        { name: 'Plank', sets: '3', reps: '60 sec' },
                    ]
                },
            ]
        }
    }
};

const WorkoutPlans = () => {
    const [activeTab, setActiveTab] = useState('beginner');
    const [proSubTab, setProSubTab] = useState('powerlifting');

    const getActiveData = () => {
        if (activeTab === 'pro') {
            return workoutData.pro[proSubTab];
        }
        return workoutData[activeTab];
    };

    const currentData = getActiveData();

    return (
        <section className="workout-section" id="workouts">
            <div className="container">
                <div className="section-header center">
                    <span className="section-subtitle">Training Programs</span>
                    <h2 className="section-title">YOUR <span className="accent">BLUEPRINT</span> TO SUCCESS</h2>
                </div>

                <div className="plan-tabs">
                    <button
                        className={`plan-tab ${activeTab === 'beginner' ? 'active' : ''}`}
                        onClick={() => setActiveTab('beginner')}
                    >
                        Beginner
                    </button>
                    <button
                        className={`plan-tab ${activeTab === 'intermediate' ? 'active' : ''}`}
                        onClick={() => setActiveTab('intermediate')}
                    >
                        Intermediate
                    </button>
                    <button
                        className={`plan-tab ${activeTab === 'pro' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pro')}
                    >
                        Pro
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeTab}-${activeTab === 'pro' ? proSubTab : ''}`}
                        className="plan-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeTab === 'pro' && (
                            <div className="sub-tabs">
                                <button
                                    className={`sub-tab ${proSubTab === 'powerlifting' ? 'active' : ''}`}
                                    onClick={() => setProSubTab('powerlifting')}
                                >
                                    <FaFistRaised /> Powerlifting
                                </button>
                                <button
                                    className={`sub-tab ${proSubTab === 'split' ? 'active' : ''}`}
                                    onClick={() => setProSubTab('split')}
                                >
                                    <FaDumbbell /> Upper / Lower Split
                                </button>
                            </div>
                        )}

                        <div className="plan-header-info">
                            <div className="plan-info-item">
                                <h4>Goal</h4>
                                <p>{currentData.subtitle}</p>
                            </div>
                            <div className="plan-info-item">
                                <h4>Designed For</h4>
                                <p>{currentData.target}</p>
                            </div>
                            <div className="plan-info-item">
                                <h4>Style</h4>
                                <p>{currentData.style}</p>
                            </div>
                        </div>

                        <div className="workout-grid">
                            {currentData.schedule.map((day, index) => (
                                <div key={index} className="day-card">
                                    <div className="day-header">
                                        <h3>{day.day}</h3>
                                        <span>{day.focus}</span>
                                    </div>
                                    <table className="day-table">
                                        <thead>
                                            <tr>
                                                <th>Exercise</th>
                                                <th>Sets</th>
                                                <th>Reps</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {day.exercises.map((ex, idx) => (
                                                <tr key={idx}>
                                                    <td>{ex.name}</td>
                                                    <td>{ex.sets}</td>
                                                    <td>{ex.reps}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>

                        <div className="plan-footer-notes">
                            <p><strong>Note:</strong> Rest between sets: 60–90 seconds | Progressive overload weekly | Proper warm-up & cooldown mandatory</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default WorkoutPlans;
