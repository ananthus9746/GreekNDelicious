import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isActiveLink = (path) => {
        return window.location.pathname === path;
    };

    return (
        <div className={styles.pageContainer}>
           

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <img className={styles.port} src={'/port.png'} />
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>
                            EAT LIKE GREEK ALWAYS FRESH, ALWAYS DELICIOUS
                        </h1>
                        <p className={styles.heroSubtitle}>Authentic Greek Cuisine in Dubai</p>
                        <div className={styles.herobtn}>
                            <button className={styles.orderButton}>View our menu</button>
                        </div>
                    </div>

                    <div className={styles.heroImageContainer}>
                        <img
                            src="https://images.unsplash.com/photo-1666819476544-38ea4e57a3d0?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Greek Gyros"
                            className={styles.heroImage}
                        />
                    </div>
                </div>

                <img className={styles.greekimage} src={'/greek.png'} />
            </section>

            <div className={styles.marque}>
                <div className={styles.marqueContent}>
                    <span>🔥 GREEK’N DELICIOUS 🔥 UAE BEST GYROS 🔥 ALWAYS FRESH 🔥 AUTHENTIC GREEK TASTE 🔥</span>
                </div>
            </div>

            {/* Products Section */}
            <section className={styles.productsSection}>
                <div className={styles.productsContainer}>
                    <div className={styles.productLeft}>
                        <div className={styles.productImage}>
                            <img
                                src="https://images.unsplash.com/photo-1702823391625-f5600fbe8a14?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Greek Salad"
                            />
                        </div>
                    </div>
                    <div className={styles.productRight}>
                        <h2 className={styles.productTitle}>
                            EXPERIENCE TH
                            ESSENCE OF
                            GREEK CUISINE
                        </h2>
                        <p className={styles.productDescription}>
                            At Greek’n Delicious, we bring you authentic Greek flavors made fresh daily.
                            From gyros and souvlaki to salads and homemade sauces,
                            every dish is prepared with love — just like in Greece.
                        </p>
                        <button className={styles.productButton}>View our menu</button>
                    </div>
                </div>
                <img className={styles.greek2} src='hand.png' />
            </section>

            {/* Events Section */}
            <section className={styles.featuredSection}>
                <div className={styles.featuredLogos}>
                    <div className={styles.cateringEvent}><span>Birthday Parties</span></div>
                    <div className={styles.cateringEvent}><span>Weddings Parties</span></div>
                    <div className={styles.cateringEvent}><span>Corporate Events</span></div>
                    <div className={styles.cateringEvent}><span>Graduations Parties</span></div>
                    <div className={styles.cateringEvent}><span>Family Reunions</span></div>
                    <div className={styles.cateringEvent}><span>Private Parties</span></div>
                </div>
            </section>

            {/* Restaurant Section */}
            <section className={styles.restaurantSection}>
                <div className={styles.restaurantContainer}>
                    <div className={styles.restaurantContent}>
                        <h2 className={styles.restaurantTitle}>
                            VISIT OUR<br />
                            RESTAURANT
                        </h2>
                        <p className={styles.restaurantDescription}>
                            Located in the heart of JLT Dubai, Greek’n Delicious
                            serves traditional Greek food made with fresh ingredients.
                            Come taste the flavors of Greece — right here in the UAE.
                        </p>
                        <div className={styles.restaurantHours}>
                            <p>Saba Tower 1 - Shop S07 - Cluster E</p>
                            <p>Jumeirah Lake Towers - Dubai</p>
                            <p>Open everyday: 9am - 10pm</p>
                        </div>
                        <button className={styles.restaurantButton}>View Our Menu</button>
                    </div>
                    <div className={styles.restaurantImage}>
                        <img
                            src="https://images.unsplash.com/photo-1715194288597-cd4df523776e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Greek Dishes"
                        />
                    </div>
                </div>
                <img className={styles.flower} src='/flower.png' />
            </section>

            <div className={styles.marque}>
                <div className={styles.marqueContent}>
                    <span>🔥 GREEK’N DELICIOUS 🔥 UAE BEST GYROS 🔥 ALWAYS FRESH 🔥 AUTHENTIC GREEK TASTE 🔥</span>
                </div>
            </div>

            {/* Quote Section */}
            <section className={styles.quoteSection}>
                <div className={styles.quoteContainer}>
                    <h2 className={styles.quote}>
                        "GRAB IT
                        ENJOY IT<br />
                        OWN IT
                        LOVE IT"

                    </h2>
                    <p className={styles.quoteAuthor}>— GREEK’N DELICIOUS</p>

                    <div className={styles.imagecontainer}>
                        <img src="https://images.unsplash.com/photo-1734974121561-11aee7d3cebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <img src="https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <img src="https://images.unsplash.com/photo-1633321702518-7feccafb94d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <img src="https://images.unsplash.com/photo-1672491017291-ae6ba870c965?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>

                    <div className={styles.sistersStory}>
                        <p>
                            Greek’n Delicious was created to share the true flavors of Greece
                            with the UAE. Every dish is prepared with passion, inspired by
                            traditional family recipes passed down through generations.

                            From freshly baked pita and vibrant salads to sizzling grilled meats,
                            every bite tells a story of authenticity.
                            We believe food is not just about taste, but about culture, memories,
                            and moments shared with loved ones.

                            Step into Greek’n Delicious and let us take you on a journey
                            through the heart of Greece, right here in the UAE.
                        </p>

                        <button className={styles.storyButton}>CONTACT US</button>
                    </div>
                </div>
                <img src={'/leaf.png'} className={styles.leaf} />
            </section>

            
        </div>
    );
};

export default Home;
