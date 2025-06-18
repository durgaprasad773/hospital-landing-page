import React from 'react'
import './TestimonialsSection.css'

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            text: 'I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.',
            author: 'Jacqueline Asong',
            title: 'Patient',
            avatar: '👩'
        },
        {
            id: 2,
            text: 'I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.',
            author: 'Patricia Roberts',
            title: 'Patient',
            avatar: '👨'
        }
    ]

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">What Our Customers Say</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="quote-icon">"</div>
                                <p className="testimonial-text">{testimonial.text}</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <span>{testimonial.avatar}</span>
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.author}</h4>
                                    <p className="author-title">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
