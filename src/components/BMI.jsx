import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './BMI.css';

const BMI = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiValue, setBmiValue] = useState(null);
    const [bmiStatus, setBmiStatus] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBmiValue(bmi);

            if (bmi < 18.5) setBmiStatus('Underweight');
            else if (bmi >= 18.5 && bmi <= 24.9) setBmiStatus('Healthy');
            else if (bmi >= 25.0 && bmi <= 29.9) setBmiStatus('Overweight');
            else setBmiStatus('Obese');
        }
    };

    return (
        <section className="bmi-section" id="bmi">
            <div className="container video-container"> {/* Assuming background image/video logic similar to others */}
                <div className="bmi-wrapper">
                    <motion.div
                        className="bmi-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">WHAT'S YOUR <span className="accent">BMI?</span></h2>
                        <table className="bmi-table">
                            <thead>
                                <tr>
                                    <th>BMI</th>
                                    <th>Weight Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Below 18.5</td>
                                    <td>Underweight</td>
                                </tr>
                                <tr>
                                    <td>18.5 - 24.9</td>
                                    <td>Healthy</td>
                                </tr>
                                <tr>
                                    <td>25.0 - 29.9</td>
                                    <td>Overweight</td>
                                </tr>
                                <tr>
                                    <td>30.0 - and Above</td>
                                    <td>Obese</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="bmi-result-mobile">
                            {bmiValue && (
                                <p>Your BMI: <span className="accent">{bmiValue}</span> - <span className={bmiStatus.toLowerCase()}>{bmiStatus}</span></p>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        className="bmi-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="section-subtitle">DETERMINE YOUR BMI</h3>
                        <p className="bmi-desc">Understanding your Body Mass Index (BMI) is the first step toward achieving your fitness goals.</p>

                        <form onSubmit={calculateBMI} className="bmi-form">
                            <div className="form-group-row">
                                <input
                                    type="number"
                                    placeholder="Height / cm"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder="Weight / kg"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group-row">
                                <input type="number" placeholder="Age" />
                                <select>
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <select className="full-width">
                                <option>Select an activity factor</option>
                                <option>Sedentary (office)</option>
                                <option>Light exercise</option>
                                <option>Moderate exercise</option>
                                <option>Active</option>
                            </select>

                            <button type="submit" className="btn-primary">Calculate</button>
                        </form>

                        {bmiValue && (
                            <motion.div
                                className="bmi-result"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                Your BMI is <span className="highlight-value">{bmiValue}</span>
                                <br />
                                <span className={`status-text ${bmiStatus.toLowerCase()}`}>{bmiStatus}</span>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BMI;
