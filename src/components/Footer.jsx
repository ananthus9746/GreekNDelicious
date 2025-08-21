import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3>Greek & Delicious</h3>
                        <p>Experience the true essence of authentic Greek cuisine</p>
                        <p>Ζήστε την πραγματική ουσία της αυθεντικής ελληνικής κουζίνας</p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Contact Info</h4>
                        <p>Phone: +971 050 804 7749</p>
                        <p>Email: info@greekndeliciuos.ae</p>
                        <p>Address: Saba Tower 1 - Shop S07-Cluster E - Jumeirah Lake Towers - Dubai</p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Opening Hours</h4>
                        <p>Monday to Sunday</p>
                        <p>From 9 am to 10 pm</p>
                        <p>Open everyday</p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Follow Us</h4>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink}>Instagram</a>
                            <a href="#" className={styles.socialLink}>Facebook</a>
                            <a href="#" className={styles.socialLink}>Pinterest</a>
                            <a href="#" className={styles.socialLink}>LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; 2025 by Greek and Delicious / UAE</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
