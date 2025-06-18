import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import ClinicSection from './components/ClinicSection/ClinicSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import SpecialistsSection from './components/SpecialistsSection/SpecialistsSection'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection/NewsletterSection'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <ClinicSection />
            <ServicesSection />
            <SpecialistsSection />            <TestimonialsSection />
            <NewsletterSection />
            <Footer />
        </div>
    )
}

export default App
