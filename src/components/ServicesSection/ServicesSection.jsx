import React from 'react'
import './ServicesSection.css'

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: 'Dental Care',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            icon: '/tooth.png',
            featured: false
        },
        {
            id: 2,
            title: 'Pulmonary',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            icon: '/shape.png',
            featured: true
        },
        {
            id: 3,
            title: 'Neurological',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            icon: '/human-brain.png',
            featured: false
        },
        {
            id: 4,
            title: 'Pediatrics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            icon: '/medical-file.png',
            featured: false
        }
    ]

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <h2 className="services-title">Our Services</h2>
                    <p className="services-subtitle">
                        We provide the most full medical services, so every person could have the opportunity
                        to receive qualitative medical help.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (<div
                        key={service.id}
                        className={`service-card ${service.featured ? 'featured' : ''}`}
                    >
                        <div className="service-icon">
                            <img
                                src={service.icon}
                                alt={service.title}
                                className="service-icon-img"
                            />
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        {service.featured && (
                            <button className="service-link">LEARN MORE →</button>
                        )}
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
