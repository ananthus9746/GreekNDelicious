import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
                        <div className={styles.footerContainer}>
                            <div className={styles.footerSection}>
                                <h3>VISIT US</h3>
                                <p>Saba Tower 1 - Shop S07<br />Cluster E - JLT, Dubai<br />+971 050 804 7749</p>
                                <p>Mon-Sun<br />9am - 10pm</p>
                            </div>
                            <div className={styles.footerSection}>
                                <h3>OUR STORY</h3>
                                <p>Bringing the authentic taste of Greece to Dubai.
                                    Fresh, homemade, and always delicious.</p>
                            </div>
                            <div className={styles.footerSection}>
                                <h3>ORDER ONLINE</h3>
                                <p>Enjoy our Greek specials<br />from the comfort of your home.</p>
                            </div>
                            <div className={styles.footerSection}>
                                <h3>CONTACT US</h3>
                                <p>Email<br />info@greekndelicious.ae</p>
                            </div>
                        </div>
                        <div className={styles.footerBottom}>
                            <div className={styles.footerLinks}>
                                <span>FOLLOW US ON INSTAGRAM @greekanddelicious</span>
                                <span>FOLLOW US ON INSTAGRAM @greekanddelicious</span>
                                <span>FOLLOW US ON INSTAGRAM @greekanddelicious</span>
                            </div>
                        </div>
                    </footer>
    );
};

export default Footer;
