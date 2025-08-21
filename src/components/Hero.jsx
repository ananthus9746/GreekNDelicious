import React from 'react';
import styles from './Hero.module.css';
import heroimg from '../assets/heroimg.png'

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Greek Decorative Ornaments */}
            <div className={`${styles.greekOrnament} ${styles.ornament1}`}>Ω</div>
            <div className={`${styles.greekOrnament} ${styles.ornament2}`}>Φ</div>
            <div className={`${styles.greekOrnament} ${styles.ornament3}`}>Δ</div>

            <div className={styles.container}>
                {/* Left Text */}
                <div className={styles.leftText}>
                    <h1>
                        EAT <br />
                        LIKE A <br />
                        GREEK
                    </h1>
                    <p className={styles.subGreek}>Φάτε σαν Έλληνας</p>
                    <p className={styles.tagline}>
                        Experience authentic Mediterranean flavors crafted with
                        traditional recipes passed down through generations
                    </p>

                    {/* Additional Greek-inspired elements */}
                    <div className={styles.greekStats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>100+</span>
                            <span className={styles.statLabel}>Traditional Recipes</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>15</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                    </div>
                </div>

                {/* Center Image */}
                <div className={styles.imageWrapper}>
                    <div className={styles.greekKeyCircle}>
                        <img
                            src={heroimg}
                            alt="Authentic Greek Gyros with fresh vegetables and tzatziki"
                            className={styles.gyros}
                        />
                    </div>

                    {/* Quality badges around the image */}
                    <div className={styles.qualityBadge} style={{ top: '10%', left: '-10%' }}>
                        <span>🏛️</span>
                        <small>Authentic</small>
                    </div>
                    <div className={styles.qualityBadge} style={{ top: '80%', right: '-10%' }}>
                        <span>🌿</span>
                        <small>Fresh Herbs</small>
                    </div>
                    <div className={styles.qualityBadge} style={{ top: '10%', right: '-10%' }}>
                        <span>🔥</span>
                        <small>Grilled Daily</small>
                    </div>
                </div>

                {/* Right Tag */}
                <div className={styles.rightTag}>
                    <div className={styles.arrow}></div>
                    <h2>
                        ALWAYS <br /> FRESH
                    </h2>
                    <p className={styles.subGreek}>πάντα φρέσκο</p>
                    <p className={styles.freshDescription}>
                        We source the finest ingredients daily from local markets,
                        ensuring every bite captures the essence of the Mediterranean
                    </p>

                  
                </div>
            </div>

            {/* Featured Items Preview */}
            <div className={styles.featuredItems}>
                <div className={styles.featuredItem}>
                    <span className={styles.itemIcon}>🥙</span>
                    <span className={styles.itemName}>Classic Gyros</span>
                </div>
                <div className={styles.featuredItem}>
                    <span className={styles.itemIcon}>🍅</span>
                    <span className={styles.itemName}>Greek Salad</span>
                </div>
                <div className={styles.featuredItem}>
                    <span className={styles.itemIcon}>🧄</span>
                    <span className={styles.itemName}>Tzatziki</span>
                </div>
                <div className={styles.featuredItem}>
                    <span className={styles.itemIcon}>🐑</span>
                    <span className={styles.itemName}>Lamb Souvlaki</span>
                </div>
            </div>

            {/* Call to Action Buttons */}
            <div className={styles.ctaButtons}>
                <button className={styles.primaryBtn}>
                    View Menu
                    <span className={styles.btnIcon}>→</span>
                </button>
                <button className={styles.secondaryBtn}>
                    Order Now
                    <span className={styles.btnIcon}>📞</span>
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scroll}>
                <span>SCROLL</span>
                <div className={styles.scrollArrow}></div>
            </div>

            {/* Background Greek pattern elements */}
            <div className={styles.greekPattern1}></div>
            <div className={styles.greekPattern2}></div>
        </section>
    );
};

export default Hero;