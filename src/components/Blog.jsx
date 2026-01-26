import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserEdit, FaCalendarDay, FaUser, FaLongArrowAltRight, FaPlus, FaTimes, FaCamera } from 'react-icons/fa';
import img1 from '../assets/hero_bg.png';
import img2 from '../assets/class_strength.png';
import img3 from '../assets/class_cardio.png';
import './Blog.css';

const initialPosts = [
    {
        id: 1,
        title: 'THE ULTIMATE GUIDE TO MUSCLE RECOVERY',
        excerpt: 'Recovery is where growth happens. Learn the top science-backed strategies to recover faster after intense workouts.',
        content: 'Recovery is where growth happens. To build muscle, you need to break it down in the gym and let it repair outside the gym. \n\n1. Sleep: Aim for 7-9 hours of quality sleep. This is when HGH is released.\n2. Nutrition: Consume high-quality protein and carbs post-workout.\n3. Hydration: Drink enough water to support metabolic processes.\n4. Active Recovery: Light walking or stretching can improve blood flow and reduce soreness.',
        author: 'Vicky Fitness',
        date: 'Jan 24, 2026',
        image: img1
    },
    {
        id: 2,
        title: 'WHY COMPOUND EXERCISES ARE KING',
        excerpt: 'Squats, Deadlifts, and Bench Press. Discover why these three movements should be the foundation of your program.',
        content: 'Compound exercises allow you to lift heavier loads and recruit more muscle mass compared to isolation exercises.\n\nKey Benefits:\n- Functional Strength: Mimics real-life movements.\n- Calorie Burn: More muscle engagement means more energy expenditure.\n- Hormonal Response: Heavy compound lifts trigger testosterone release.\n\nStart your workout with big lifts like Squats, Deadlifts, and Overhead Presses for maximum gains.',
        author: 'John Doe',
        date: 'Jan 22, 2026',
        image: img2
    },
    {
        id: 3,
        title: 'NUTRITION MYTHS BUSTED',
        excerpt: 'Carbs are not the enemy. We break down common diet myths that are holding back your progress.',
        content: 'There is so much misinformation about nutrition. Let’s clear up the biggest myths.\n\nMyth 1: Carbs make you fat.\nTruth: Excessive calories make you fat. Carbs are essential for energy.\n\nMyth 2: You need protein immediately after a workout.\nTruth: The anabolic window is larger than you think. Just hit your daily protein goal.\n\nMyth 3: Fat is bad.\nTruth: Healthy fats are crucial for hormone production.',
        author: 'Sarah Smith',
        date: 'Jan 20, 2026',
        image: img3
    }
];

const Blog = () => {
    const [posts, setPosts] = useState(initialPosts);
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({ title: '', author: '', content: '', image: null });
    const [selectedPost, setSelectedPost] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title && formData.author && formData.content) {
            const newPost = {
                id: posts.length + 1,
                title: formData.title.toUpperCase(),
                excerpt: formData.content.substring(0, 100) + '...',
                content: formData.content,
                author: formData.author,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                image: previewUrl || img1
            };
            setPosts([newPost, ...posts]);
            setFormData({ title: '', author: '', content: '', image: null });
            setPreviewUrl(null);
            setShowForm(false);
            alert('Your story has been published!');
        }
    };

    return (
        <section className="blog-section">
            <div className="container">
                <div className="section-header center">
                    <span className="section-subtitle">LATEST NEWS & BLOG</span>
                    <h2 className="section-title">NEWS, STORIES & ARTICLES <br /><span className="accent">FOR A STRONGER YOU</span></h2>
                </div>

                <div className="blog-actions">
                    <button
                        className="btn-submit-story"
                        onClick={() => setShowForm(!showForm)}
                    >
                        <FaPlus /> {showForm ? 'Close Form' : 'Submit Your Story'}
                    </button>
                </div>

                <AnimatePresence>
                    {showForm && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="blog-form-container">
                                <form className="blog-submission-form" onSubmit={handleSubmit}>
                                    <h3>Share Your Fitness Journey</h3>

                                    <div className="form-group image-upload-group">
                                        <input
                                            type="file"
                                            id="blog-image-upload"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden-file-input"
                                        />
                                        <label htmlFor="blog-image-upload" className="file-upload-label">
                                            <FaCamera /> {previewUrl ? 'Change Image' : 'Upload Event/Story Image'}
                                        </label>
                                        {previewUrl && (
                                            <div className="image-preview-container">
                                                <img src={previewUrl} alt="Preview" className="image-preview" />
                                                <button
                                                    type="button"
                                                    className="remove-image-btn"
                                                    onClick={() => {
                                                        setPreviewUrl(null);
                                                        setFormData({ ...formData, image: null });
                                                    }}
                                                >
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Blog Title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="author"
                                            placeholder="Author Name"
                                            value={formData.author}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="content"
                                            placeholder="Write your full story here..."
                                            value={formData.content}
                                            onChange={handleInputChange}
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn-publish">Publish Story</button>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="blog-grid">
                    {posts.map((post) => (
                        <motion.div
                            key={post.id}
                            className="blog-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="blog-image-wrapper">
                                <div className="blog-date-badge">
                                    <FaCalendarDay /> {post.date}
                                </div>
                                <img src={post.image} alt={post.title} loading="lazy" />
                                <div className="blog-overlay"></div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span><FaUser /> {post.author}</span>
                                </div>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <button
                                    className="btn-read-blog"
                                    onClick={() => setSelectedPost(post)}
                                >
                                    Read Article <FaLongArrowAltRight />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        className="blog-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPost(null)}
                    >
                        <motion.div
                            className="blog-modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={() => setSelectedPost(null)}>
                                <FaTimes />
                            </button>
                            <div className="blog-modal-image-container">
                                <img src={selectedPost.image} alt={selectedPost.title} className="blog-modal-img" />
                            </div>
                            <div className="blog-modal-content">
                                <div className="blog-meta large">
                                    <span><FaCalendarDay /> {selectedPost.date}</span>
                                    <span><FaUser /> {selectedPost.author}</span>
                                </div>
                                <h3>{selectedPost.title}</h3>
                                <div className="blog-full-text">
                                    {selectedPost.content.split('\n').map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Blog;
