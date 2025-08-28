import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActiveLink = (path) => {
        return window.location.pathname === path;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <div className={styles.logo}>
                        <img src="/logowhite.png" alt="Greek N Delicious Logo" className={styles.logoImage} />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className={styles.mobileMenuButton}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className={`${styles.navLinks} ${isMenuOpen ? styles.mobileOpen : ''}`}>
                        <NavLink
                            to="/"
                            className={`${styles.navLink} ${isActiveLink("/") ? styles.active : ""}`}
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/catering"
                            className={`${styles.navLink} ${isActiveLink("/catering") ? styles.active : ""}`}
                            onClick={closeMenu}
                        >
                            Catering
                        </NavLink>
                        <NavLink
                            to="/menu"
                            className={`${styles.navLink} ${isActiveLink("/menu") ? styles.active : ""}`}
                            onClick={closeMenu}
                        >
                            Menu
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={`${styles.navLink} ${isActiveLink("/contact") ? styles.active : ""}`}
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>
                    </div>

                    {/* Desktop Order Button */}
                    <button className={`${styles.orderButton} ${styles.desktopOnly}`}>MESSAGE US</button>

                    {/* Mobile Order Button */}
                    <button className={`${styles.orderButton} ${styles.mobileOnly}`}>MESSAGE US</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
