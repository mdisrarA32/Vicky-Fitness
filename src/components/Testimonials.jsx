import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const reviewsData = [
    {
        id: 1,
        name: 'Md AjmaT AzaM',
        text: 'Hands down the best gym in Motihari! The equipment is super smooth and modern, the gym is always clean, and the trainers are extremely supportive. The owner is friendly and motivating. Truly a number one gym experience 💪😎',
    },
    {
        id: 2,
        name: 'Rohit Saha (Local Guide)',
        text: 'One of the best gyms in Motihari, East Champaran. Excellent trainers, clean and positive environment, modern equipment, and a great overall workout experience. Highly recommended for all fitness levels.',
    },
    {
        id: 3,
        name: 'Shaikh Niyaz (Local Guide)',
        text: 'Very clean gym with good quality equipment and a peaceful training environment. Perfect place to work out without disturbance. Maintenance and hygiene are top class.',
    },
    {
        id: 4,
        name: 'Shiv Kumar',
        text: 'No.1 gym in Motihari. Very well maintained and organized. Owner behavior is friendly and professional. You feel comfortable training here.',
    },
    {
        id: 5,
        name: 'Aman Raj',
        text: 'Best gym in Motihari. Trainers are knowledgeable, the owner is supportive, and the gym is neat and clean. Great place for serious fitness results.',
    },
    {
        id: 6,
        name: 'Ali Hussain',
        text: 'Motihari ka number 1 gym! Amazing atmosphere, excellent machines, and the owner is very supportive. Training here feels motivating and energetic ⚜️💪',
    },
    {
        id: 7,
        name: 'Dhani Seth Arvind (Local Guide)',
        text: 'Best trainer and best facilities available here. The environment is neat, clean, and professional. Ideal gym for beginners as well as advanced members.',
    },
    {
        id: 8,
        name: 'Adarsh Kumar',
        text: 'Good facility with great discounts. Trainers behave very nicely and equipment quality is better than most gyms. Value for money and results-focused.',
    },
    {
        id: 9,
        name: 'Kishan Kumar',
        text: 'Vicky Fitness Gym feels like a family. Friendly environment, supportive trainers, and positive vibes every day. Training here keeps you motivated ❤️',
    },
    {
        id: 10,
        name: 'Aarohi',
        text: 'Best gym in Motihari. The gym is very spacious and the owner’s behavior is extremely good. Clean environment and motivating atmosphere ♥️',
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="section-header center">
                    <span className="section-subtitle">Real Stories</span>
                    <h2 className="section-title">HAPPY <span className="accent">MEMBERS</span></h2>
                </div>
            </div>

            <div className="testimonials-slider-container">
                {/* We move X from 0% to -50% because we have 2 sets of reviews. 
            When we reach -50% (end of first set), we seamlessly loop back to 0%. */}
                <motion.div
                    className="testimonials-track"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40, // Adjust speed here
                        ease: "linear",
                    }}
                    whileHover={{ animationPlayState: 'paused' }} // CSS override for motion? No, framer motion pause is complex.
                // Framer motion simple pause on hover isn't built-in easily for infinite loops without AnimateControls.
                // We can use bare CSS style for pausing if we use FLIP or just large constraints?
                // Actually, simply adding a class or using standard CSS animation might be smoother for 'pause on hover'.
                // BUT, we want to stick to Framer Motion if possible. 
                // Let's rely on standard CSS animation for the infinite scroll part to easily handle 'pause on hover'.
                // Or, use a container with hover => animation-play-state: paused.
                >
                    {/* Duplicate list for seamless loop */}
                    {[...reviewsData, ...reviewsData].map((review, index) => (
                        <div key={`${review.id}-${index}`} className="testimonial-card-move">
                            <div className="review-header">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <FaQuoteLeft className="quote-icon-small" />
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <h4 className="review-author">{review.name}</h4>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
