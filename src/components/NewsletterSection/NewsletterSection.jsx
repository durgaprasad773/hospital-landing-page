import React, { useState } from 'react'
import './NewsletterSection.css'

const NewsletterSection = () => {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setIsSubmitted(true)
            setTimeout(() => {
                setIsSubmitted(false)
                setEmail('')
            }, 3000)
        }
    }

    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <div className="newsletter-content">
                    <h2 className="newsletter-title">Subscribe to Newsletter</h2>
                    <p className="newsletter-subtitle">
                        Get the latest news and updates from our medical team
                    </p>

                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <div className="form-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="newsletter-input"
                                required
                            />
                            <button
                                type="submit"
                                className="newsletter-btn"
                                disabled={isSubmitted}
                            >
                                {isSubmitted ? 'Subscribed!' : 'Subscribe'}
                            </button>
                        </div>
                    </form>

                    {isSubmitted && (
                        <p className="success-message">
                            Thank you for subscribing to our newsletter!
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default NewsletterSection
