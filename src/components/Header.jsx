import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <div className={styles.logoText}>
                        <h1>Greek</h1>
                        <h2>n Delicious</h2>
                    </div>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink></li>
                        <li><NavLink to="/menu" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Menu</NavLink></li>
                        <li><NavLink to="/catering" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Catering</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contact</NavLink></li>
                    </ul>
                </nav>

                <div className={styles.headerActions}>
                    <a href="tel:+9710508047749" className={styles.phoneLink}>+971 050 804 7749</a>
                    <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
