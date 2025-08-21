import React from 'react';
import Hero from '../components/Hero';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.pageContainer}>
            <Hero />

            {/* About Section */}
            <section className={styles.aboutSection}>
                <div className={styles.aboutContainer}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Story</h2>
                        <p className={styles.sectionSubtitle}>A Taste of Greek Tradition</p>
                        <p className={styles.sectionDescription}>
                            Discover the authentic flavors of Greece, where every dish tells a story of tradition and passion.
                        </p>
                    </div>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutText}>
                            <h3>A Journey Through Greek Flavors</h3>
                            <p>Our restaurant brings the heart of Greek cuisine to your table, featuring time-honored recipes and the finest ingredients.</p>
                            <div className={styles.storyHighlight}>
                                <h4>Family Tradition</h4>
                                <p>Three generations of culinary expertise, bringing authentic Greek flavors to your plate.</p>
                            </div>
                        </div>
                        <div className={styles.aboutImage}>
                            <div className={styles.aboutImageWrapper}>
                                <img src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format" alt="Traditional Greek cooking" />
                                <div className={styles.imageOverlay}>
                                    <h4>Authentic Greek Kitchen</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           

           

           

           
        </div>
    );
};

export default Home;
