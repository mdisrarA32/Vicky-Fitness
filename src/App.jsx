import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import WhyChooseUs from './components/WhyChooseUs'
import WorkoutPlans from './components/WorkoutPlans'
import Trainers from './components/Trainers'
import BMI from './components/BMI'
import Pricing from './components/Pricing'
import Timetable from './components/Timetable'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Blog from './components/Blog'
// Contact removed in previous step - Re-adding for independent page
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="app-container">
      {(currentView === 'home' || currentView === 'contact' || currentView === 'blog') && (
        <Navbar setView={setCurrentView} currentView={currentView} />
      )}

      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Classes />
            <WhyChooseUs />
            <Timetable />
            <WorkoutPlans />
            <BMI />
            <Trainers />
            <Pricing />
            <Testimonials />
            <Gallery />
            <Booking />
          </motion.div>
        )}

        {currentView === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        )}

        {currentView === 'blog' && (
          <motion.div
            key="blog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Blog />
          </motion.div>
        )}
      </AnimatePresence>

      {currentView === 'admin-login' && (
        <AdminLogin setView={setCurrentView} />
      )}

      {currentView === 'admin-dashboard' && (
        <AdminDashboard setView={setCurrentView} />
      )}

      {/* Footer should be visible on Home, Contact, Blog. Maybe not Admin? Let's keep it for now or hide if admin */}
      {(currentView === 'home' || currentView === 'contact' || currentView === 'blog') && <Footer setView={setCurrentView} />}
    </div>
  )
}

export default App
