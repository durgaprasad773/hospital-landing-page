import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">                {/* Top Row: Logo and Navigation */}
                <div className="footer-top">                    <div className="footer-left">
                    <a href="/" className="footer-logo">
                        <span className="logo-text">
                            <span className="logo-medi">Medi</span>
                            <span className="logo-care">Care+</span>
                        </span>
                    </a>

                    {/* Social Links below logo */}
                    <div className="social-links">
                        <a href="#" className="social-link">f</a>
                        <a href="#" className="social-link">G</a>
                        <a href="#" className="social-link">t</a>
                    </div>

                    {/* Copyright below social icons */}
                    <div className="footer-copyright">
                        <p>©2023 - 011180</p>
                    </div>
                </div>

                    <div className="footer-nav">
                        <a href="#" className="footer-link">Home</a>
                        <a href="#" className="footer-link">About</a>
                        <a href="#" className="footer-link">Services</a>
                        <a href="#" className="footer-link">News</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
