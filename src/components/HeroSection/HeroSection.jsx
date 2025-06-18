import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">                        <div className="hero-badge">
                        Welcome to <span className="logo-medi">Medi Care+</span> Clinic
                    </div>
                        <h1 className="hero-title">
                            Best Specialists
                        </h1>
                        <p className="hero-description">
                            We are on the leading edge of cancer care. Providing the full
                            continuum of cancer treatments and supportive care services in a
                            single convenient location.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">
                                Make an Appointment
                            </button>
                            <button className="btn-secondary">
                                Departments
                            </button>
                        </div>
                    </div>                <div className="hero-image">
                        <div className="hero-image-placeholder">
                            <div className="doctor-illustration">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
