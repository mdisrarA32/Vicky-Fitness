import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';
import img1 from '../assets/hero_bg.png';
import img2 from '../assets/class_strength.png';
import img3 from '../assets/class_cardio.png';
import img4 from '../assets/trainer_1.png';
import img5 from '../assets/trainer_2.png';
import img6 from '../assets/trainer_3.png';

// Duplicate detailed images for better gallery flow
// We can mix them up or reuse existing ones
const row1Images = [img1, img2, img3, img4, img1, img2];
const row2Images = [img5, img6, img3, img4, img5, img6];

const Gallery = () => {
    return (
        <section className="gallery-section" id="gallery">
            <div className="section-header center">
                <span className="section-subtitle">Gym Vibes</span>
                <h2 className="section-title">OUR <span className="accent">GALLERY</span></h2>
            </div>

            <div className="gallery-scroller-container">
                {/* Row 1: Left to Right (Visually moving Right ->) 
              To move Right: We start from Left (-50%) and go to 0%. 
          */}
                <motion.div
                    className="gallery-track"
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    {/* Duplicate set for seamless loop */}
                    {[...row1Images, ...row1Images, ...row1Images].map((img, idx) => (
                        <div key={`row1-${idx}`} className="gallery-item-scroll">
                            <img src={img} alt={`Gallery 1-${idx}`} loading="lazy" />
                            <div className="gallery-overlay"></div>
                        </div>
                    ))}
                </motion.div>

                {/* Row 2: Right to Left (Visually moving Left <-) 
              To move Left: We start from 0% and go to -50%.
          */}
                <motion.div
                    className="gallery-track"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 35, // Slightly different speed for dynamic feel
                        ease: "linear",
                    }}
                >
                    {/* Duplicate set for seamless loop */}
                    {[...row2Images, ...row2Images, ...row2Images].map((img, idx) => (
                        <div key={`row2-${idx}`} className="gallery-item-scroll">
                            <img src={img} alt={`Gallery 2-${idx}`} loading="lazy" />
                            <div className="gallery-overlay"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
