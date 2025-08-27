import React, { useEffect } from 'react';
import styles from './Home.module.css';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.pageContainer}>
            {/* Navigation */}
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <div className={styles.logo}>
                        <span className={styles.logoText}>GREEN'N DELICIOUS</span>
                    </div>
                    <div className={styles.navLinks}>
                        <a href="#menu">MENU</a>
                        <a href="#about">ABOUT</a>
                        <a href="#locations">LOCATIONS</a>
                        <a href="#story">STORY</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                    <button className={styles.orderButton}>ORDER ONLINE</button>
                </div>
            </nav>


            {/* Hero Section */}
            <section className={styles.heroSection}>
                <img className={styles.port} src={'/port.png'} />
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>
                            SAUCE MADE<br />
                            WITH LOVE IN<br />
                            KANSAS CITY
                        </h1>
                        <p className={styles.heroSubtitle}>SINCE 1970... SOMETHING.</p>
                        <div className={styles.herobtn}>
                            <button className={styles.orderButton}>View our menu</button>

                        </div>

                    </div>

                    <div className={styles.heroImageContainer}>
                        <img
                            src="https://images.unsplash.com/photo-1666819476544-38ea4e57a3d0?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="BBQ wings"
                            className={styles.heroImage}
                        />
                    </div>

                </div>

                <img className={styles.greekimage} src={'/greek.png'} />
            </section>
            <div className={styles.marque}>
                <div className={styles.marqueContent}>
                    <span>🔥 GREE'NDELICIOUS 🔥 BRING THE HEAT HOME 🔥 BBQ SAUCE COMING IN HOT 🔥 MADE FROM SCRATCH DAILY</span>
                </div>
            </div>
            {/* Products Section */}
            <section className={styles.productsSection}>
                <div className={styles.productsContainer}>
                    <div className={styles.productLeft}>
                        <div className={styles.productImage}>
                            <img
                                src="https://images.unsplash.com/photo-1702823391625-f5600fbe8a14?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Jones BBQ Sauce bottle"
                            />
                        </div>
                    </div>
                    <div className={styles.productRight}>
                        <h2 className={styles.productTitle}>
                            THE MAGIC OF<br />
                            JONES BBQ IN<br />
                            YOUR HOME
                        </h2>
                        <p className={styles.productDescription}>
                            The Jones family has made their sauce from scratch daily for
                            over 50 years. For the first time ever, you can bring that
                            authentic Kansas City flavor home with you.
                        </p>
                        <button className={styles.productButton}>View our menu</button>
                    </div>
                </div>

                <img className={styles.greek2} src='hand.png' />
            </section>

            {/* Featured In Section */}
            <section className={styles.featuredSection}>
                <div className={styles.featuredLogos}>
                    <div className={styles.cateringEvent}>
                        <span>Birthday Parties</span>
                    </div>
                    <div className={styles.cateringEvent}>
                        <span>Weddings Parties</span>
                    </div>
                    <div className={styles.cateringEvent}>
                        <span>Corporate Events</span>
                    </div>
                    <div className={styles.cateringEvent}>
                        <span>Graduations Parties</span>
                    </div>
                    <div className={styles.cateringEvent}>
                        <span>Family Reunions</span>
                    </div>
                    <div className={styles.cateringEvent}>
                        <span>Private Parties</span>
                    </div>
                </div>
            </section>

            {/* Restaurant Section */}
            <section className={styles.restaurantSection}>
                <div className={styles.restaurantContainer}>
                    <div className={styles.restaurantContent}>
                        <h2 className={styles.restaurantTitle}>
                            STOP BY OUR<br />
                            RESTAURANT
                        </h2>
                        <p className={styles.restaurantDescription}>
                            From housemade sausages to racks of ribs, we love to feed our Kansas City<br />
                            community. So come join the party... and come hungry!
                        </p>
                        <div className={styles.restaurantHours}>
                            <p>Restaurant open 10:45am - 3pm or sellout</p>
                            <p>Tuesday through Saturday each week</p>
                            <p>No online orders or call-ins available</p>
                        </div>
                        <button className={styles.restaurantButton}>View Our Menu</button>
                    </div>
                    <div className={styles.restaurantImage}>
                        <img
                            src="https://images.unsplash.com/photo-1715194288597-cd4df523776e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="BBQ ribs platter"
                        />
                    </div>
                </div>
                <img className={styles.flower} src='/flower.png' />
            </section>

            <div className={styles.marque}>
                <div className={styles.marqueContent}>
                    <span>🔥 GREE'NDELICIOUS 🔥 BRING THE HEAT HOME 🔥 BBQ SAUCE COMING IN HOT 🔥 MADE FROM SCRATCH DAILY</span>
                </div>
            </div>
       
            {/* Quote Section */}
            <section className={styles.quoteSection}>
                <div className={styles.quoteContainer}>
                    <h2 className={styles.quote}>
                        "THE BEST ATTITUDE<br />
                        IS GRATITUDE"
                    </h2>
                    <p className={styles.quoteAuthor}>— GREEK'N DELICIOUS</p>

                    <div className={styles.imagecontainer}>
                        <img
                            src="https://images.unsplash.com/photo-1734974121561-11aee7d3cebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1633321702518-7feccafb94d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />


                        <img
                            src="https://images.unsplash.com/photo-1672491017291-ae6ba870c965?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>

                    <div className={styles.sistersStory}>
                        <p>
                            For sisters Deborah "Lil" and Mary "Shorty" Jones, barbecue is a<br />
                            way of life. When they were little girls, their father Leroy D. Jones Sr.<br />
                            would cook up a storm in the backyard for family and friends. In<br />
                            the 80's they decided to take those backyard gatherings and open<br />
                            the old restaurant.
                        </p>
                        <button className={styles.storyButton}>CONTACT US</button>
                    </div>
                </div>
                <img src={'/leaf.png'} className={styles.leaf} />
            </section>


            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerSection}>
                        <h3>VISIT US</h3>
                        <p>6145 Troost Ave<br />Kansas City, MO 64110<br />816-923-4999</p>
                        <p>Mon-Sun<br />11am-8pm daily</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>OUR STORY</h3>
                        <p>From backyard gatherings to Kansas<br />City institution, we've been serving<br />authentic BBQ since 1970.</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>SHOP AT HOME</h3>
                        <p>Bring our<br />award-winning sauces<br />home with you.</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>FOR MEDIA INQUIRIES</h3>
                        <p>General<br />info@jonesbbq.com<br />Press<br />press@jonesbbq.com</p>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerLinks}>
                        <span>FOLLOW US ON INSTAGRAM @OGJONESBBQ</span>
                        <span>FOLLOW US ON INSTAGRAM @OGJONESBBQ</span>
                        <span>FOLLOW US ON INSTAGRAM @OGJONESBBQ</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;