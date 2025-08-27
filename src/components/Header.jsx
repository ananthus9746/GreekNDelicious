import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    
    const isActiveLink = (path) => {
        return window.location.pathname === path;
    };


    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <div className={styles.logo}>
                        <span className={styles.logoText}>GREEK'N DELICIOUS</span>
                    </div>
                    <div className={styles.navLinks}>
                        <NavLink
                            to="/"
                            className={`${styles.navLink} ${isActiveLink("/") ? styles.active : ""}`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/menu"
                            className={`${styles.navLink} ${isActiveLink("/menu") ? styles.active : ""}`}
                        >
                            Menu
                        </NavLink>
                        <NavLink
                            to="/catering"
                            className={`${styles.navLink} ${isActiveLink("/catering") ? styles.active : ""}`}
                        >
                            Catering
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={`${styles.navLink} ${isActiveLink("/contact") ? styles.active : ""}`}
                        >
                            Contact
                        </NavLink>
                    </div>
                    <button className={styles.orderButton}>CONTACT US</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
