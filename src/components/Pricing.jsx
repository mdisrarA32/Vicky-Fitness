import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaDumbbell, FaCrown, FaGem, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import './Pricing.css';

const plans = {
    monthly: [
        {
            id: 1,
            name: 'Basic Plan',
            icon: <FaDumbbell />,
            desc: 'Perfect for beginners who want to start their fitness journey.',
            price: '999',
            features: ['Access to Gym Equipment', 'Locker Room Access', 'Free WiFi', '1 Group Class/Month'],
            highlight: false
        },
        {
            id: 2,
            name: 'Standard Plan',
            icon: <FaCrown />,
            desc: 'Ideal for regular gym-goers looking for more flexibility and guidance.',
            price: '1999',
            features: ['Unlimited Gym Access', 'All Group Classes', 'Free Diet Plan', 'Personal Trainer Assessment'],
            highlight: true
        },
        {
            id: 3,
            name: 'Premium Plan',
            icon: <FaGem />,
            desc: 'Designed for serious fitness enthusiasts who want full access and support.',
            price: '2999',
            features: ['VIP Locker & Sauna', 'Unlimited Personal Training', 'Custom Nutrition Plan', 'Supplement Discounts'],
            highlight: false
        }
    ],
    yearly: [
        {
            id: 1,
            name: 'Basic Plan',
            icon: <FaDumbbell />,
            desc: 'Perfect for beginners who want to start their fitness journey.',
            price: '9999', // Approx 833/mo
            features: ['Access to Gym Equipment', 'Locker Room Access', 'Free WiFi', '1 Group Class/Month'],
            highlight: false
        },
        {
            id: 2,
            name: 'Standard Plan',
            icon: <FaCrown />,
            desc: 'Ideal for regular gym-goers looking for more flexibility and guidance.',
            price: '19999', // Approx 1666/mo
            features: ['Unlimited Gym Access', 'All Group Classes', 'Free Diet Plan', 'Personal Trainer Assessment'],
            highlight: true
        },
        {
            id: 3,
            name: 'Premium Plan',
            icon: <FaGem />,
            desc: 'Designed for serious fitness enthusiasts who want full access and support.',
            price: '29999', // Approx 2500/mo
            features: ['VIP Locker & Sauna', 'Unlimited Personal Training', 'Custom Nutrition Plan', 'Supplement Discounts'],
            highlight: false
        }
    ]
};

const Pricing = () => {
    const [billing, setBilling] = useState('monthly');

    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="section-header center">
                    <span className="section-subtitle-badge">Pricing Package</span>
                    <h2 className="section-title">WE BELIEVE FITNESS SHOULD BE <br /><span className="accent">FLEXIBLE & ACCESSIBLE</span></h2>
                </div>

                <div className="pricing-toggle-container">
                    <span className={`toggle-label ${billing === 'monthly' ? 'active' : ''}`}>Monthly</span>
                    <div
                        className="toggle-switch"
                        onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
                    >
                        <motion.div
                            className="toggle-handle"
                            layout
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                            style={{
                                left: billing === 'monthly' ? '4px' : 'auto',
                                right: billing === 'yearly' ? '4px' : 'auto'
                            }}
                        />
                    </div>
                    <span className={`toggle-label ${billing === 'yearly' ? 'active' : ''}`}>
                        Yearly <span className="save-badge">(Save 23%)</span>
                    </span>
                </div>

                <div className="pricing-grid">
                    <AnimatePresence mode="wait">
                        {plans[billing].map((plan) => (
                            <motion.div
                                key={`${plan.id}-${billing}`}
                                className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                {plan.highlight && <div className="best-value-badge">Most Popular</div>}

                                <div className="plan-icon-wrapper">
                                    {plan.icon}
                                </div>

                                <div className="plan-header">
                                    <h3>{plan.name}</h3>
                                    <p className="plan-desc">{plan.desc}</p>
                                </div>

                                <div className="price-container">
                                    <span className="currency">₹</span>
                                    <motion.span
                                        key={plan.price}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="price"
                                    >
                                        {plan.price}
                                    </motion.span>
                                    <span className="period">{billing === 'monthly' ? '/ month' : '/ year'}</span>
                                </div>

                                <ul className="plan-features">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}><FaCheck className="check-icon" /> {feature}</li>
                                    ))}
                                </ul>

                                <button className={`btn-pricing ${plan.highlight ? 'primary' : 'secondary'}`}>
                                    Join Now
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
