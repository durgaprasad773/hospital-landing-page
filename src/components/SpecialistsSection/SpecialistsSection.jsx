import React from 'react'
import './SpecialistsSection.css'

const SpecialistsSection = () => {
    const specialists = [
        {
            id: 1,
            name: 'Dr. Russel Al',
            specialty: 'Dental Care',
            image: '/api/placeholder/300/400'
        },
        {
            id: 2,
            name: 'Dr. Hikan Gasper',
            specialty: 'Cardiology',
            image: '/api/placeholder/300/400'
        },
        {
            id: 3,
            name: 'Dr. Sukhoncel Geria',
            specialty: 'Neurological',
            image: '/api/placeholder/300/400'
        },
        {
            id: 4,
            name: 'Dr. Jakibsom',
            specialty: 'Pediatrics',
            image: '/api/placeholder/300/400'
        }
    ]

    return (
        <section className="specialists-section">
            <div className="specialists-container">
                <div className="specialists-header">
                    <h2 className="specialists-title">We Have The Best Specialist</h2>
                    <p className="specialists-subtitle">
                        We have a wide experience in experience design and strategy,
                        with locally-rooted knowledge.
                    </p>
                </div>

                <div className="specialists-grid">
                    {specialists.map((specialist) => (
                        <div key={specialist.id} className="specialist-card">
                            <div className="specialist-image">
                                <div className="image-placeholder">
                                    <span>👨‍⚕️</span>
                                </div>
                            </div>
                            <div className="specialist-info">
                                <h3 className="specialist-name">{specialist.name}</h3>
                                <p className="specialist-specialty">{specialist.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SpecialistsSection
