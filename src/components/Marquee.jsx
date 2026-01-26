import React from 'react';
import { motion } from 'framer-motion';
import './Marquee.css';

const Marquee = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-wrapper">
                <motion.div
                    className="marquee-track-container"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    {/* Component Copy 1 */}
                    <div className="marquee-content">
                        <span className="marquee-text">VICKY FITNESS </span>
                        <span className="marquee-text outline">VICKY FITNESS </span>
                    </div>

                    {/* Component Copy 2 */}
                    <div className="marquee-content">
                        <span className="marquee-text">VICKY FITNESS </span>
                        <span className="marquee-text outline">VICKY FITNESS </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
