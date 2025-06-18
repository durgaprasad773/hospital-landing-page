import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <a href="/">
                        <span className="logo-text">
                            <span className="logo-medi">Medi</span>
                            <span className="logo-care">Care+</span>
                        </span>
                    </a>
                </div>

                {/* Desktop Navigation Links */}
                <div className="navbar-menu">
                    <a href="#" className="navbar-link">Home</a>
                    <a href="#" className="navbar-link">About</a>
                    <a href="#" className="navbar-link">Services</a>
                    <a href="#" className="navbar-link">News</a>
                </div>

                {/* Contact Button */}
                <div className="navbar-actions">
                    <button className="btn-primary">Contact</button>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-button">
                    <button onClick={toggleMenu} className="menu-toggle">
                        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                    </button>
                </div>                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#" className="mobile-link" onClick={toggleMenu}>Home</a>
                    <a href="#" className="mobile-link" onClick={toggleMenu}>About</a>
                    <a href="#" className="mobile-link" onClick={toggleMenu}>Services</a>
                    <a href="#" className="mobile-link" onClick={toggleMenu}>News</a>
                    <button className="btn-primary mobile-btn">Contact</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
