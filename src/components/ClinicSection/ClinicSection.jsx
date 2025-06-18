import React from 'react'
import './ClinicSection.css'

const ClinicSection = () => {
    const features = [
        {
            id: 1,
            title: 'Qualified Doctors',
            image: '/doctor-woman.png',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200'
        },
        {
            id: 2,
            title: 'Emergency Care',
            image: '/doctor-woman copy.png',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200'
        },
        {
            id: 3,
            title: '24 Hours Service',
            image: '/doctor-woman copy 2.png',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200'
        }
    ]

    return (
        <section className="clinic-section">
            <div className="clinic-container">
                <div className="clinic-content">
                    <div className="clinic-text">
                        <h2 className="clinic-title">
                            Clinic With Innovative
                        </h2>
                        <p className="clinic-description">
                            We provide the most full medical services, so every person could
                            have the opportunity to receive qualitative medical help.
                        </p>                        <button className="btn-primary">
                            Learn More
                        </button>
                    </div>                    <div className="clinic-features">
                        {/* First row - Qualified Doctors */}
                        <div className="feature-row-1">
                            <div className={`feature-card ${features[0].bgColor} ${features[0].borderColor}`}>
                                <div className="feature-image">
                                    <img
                                        src={features[0].image}
                                        alt={features[0].title}
                                        className="feature-img"
                                    />
                                </div>
                                <h3 className="feature-title">{features[0].title}</h3>
                            </div>
                        </div>

                        {/* Second row - Emergency Care */}
                        <div className="feature-row-2">
                            <div className={`feature-card ${features[1].bgColor} ${features[1].borderColor}`}>
                                <div className="feature-image">
                                    <img
                                        src={features[1].image}
                                        alt={features[1].title}
                                        className="feature-img"
                                    />
                                </div>
                                <h3 className="feature-title">{features[1].title}</h3>
                            </div>
                        </div>

                        {/* Third row - 24 Hours Service */}
                        <div className="feature-row-3">
                            <div className={`feature-card ${features[2].bgColor} ${features[2].borderColor}`}>
                                <div className="feature-image">
                                    <img
                                        src={features[2].image}
                                        alt={features[2].title}
                                        className="feature-img"
                                    />
                                </div>
                                <h3 className="feature-title">{features[2].title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClinicSection
