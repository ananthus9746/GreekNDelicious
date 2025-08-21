import React, { useState } from 'react';
import styles from './Catering.module.css';

const Catering = () => {
    const [selectedEvent, setSelectedEvent] = useState('all');

    const eventTypes = [
        { id: 'all', name: 'All Events' },
        { id: 'birthday', name: 'Birthday Parties' },
        { id: 'corporate', name: 'Corporate Events' },
        { id: 'wedding', name: 'Weddings' },
        { id: 'anniversary', name: 'Anniversaries' },
        { id: 'graduation', name: 'Graduations' },
        { id: 'holiday', name: 'Holiday Celebrations' }
    ];

    const cateringServices = [
        {
            id: 1,
            name: 'Birthday Party Package',
            category: 'birthday',
            description: 'Complete birthday celebration with Greek delicacies, perfect for all ages',
            features: ['Custom menu selection', 'Party decorations', 'Professional staff', 'Setup and cleanup'],
            price: 'Starting from AED 500',
            image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800'
        },
        {
            id: 2,
            name: 'Corporate Event Package',
            category: 'corporate',
            description: 'Professional catering for business meetings, conferences, and corporate events',
            features: ['Business-friendly menu', 'Professional presentation', 'Flexible timing', 'Dietary accommodations'],
            price: 'Starting from AED 800',
            image: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800'
        },
        {
            id: 3,
            name: 'Wedding Reception',
            category: 'wedding',
            description: 'Elegant wedding catering with traditional Greek dishes and modern presentation',
            features: ['Custom wedding menu', 'Wedding cake service', 'Professional waitstaff', 'Elegant table settings'],
            price: 'Starting from AED 2000',
            image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800'
        },
        {
            id: 4,
            name: 'Anniversary Celebration',
            category: 'anniversary',
            description: 'Romantic anniversary dinner with special Greek cuisine arrangements',
            features: ['Romantic setup', 'Special menu options', 'Candlelight service', 'Personalized touches'],
            price: 'Starting from AED 600',
            image: 'https://images.unsplash.com/photo-1515378799626-85cda6e3f3a4?w=800'
        },
        {
            id: 5,
            name: 'Graduation Party',
            category: 'graduation',
            description: 'Celebrate academic achievements with delicious Greek food and festive atmosphere',
            features: ['Graduation-themed decorations', 'Variety of appetizers', 'Beverage service', 'Party coordination'],
            price: 'Starting from AED 400',
            image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800'
        },
        {
            id: 6,
            name: 'Holiday Celebration',
            category: 'holiday',
            description: 'Special holiday menus featuring traditional Greek holiday dishes',
            features: ['Holiday-themed menu', 'Seasonal decorations', 'Family-style service', 'Traditional recipes'],
            price: 'Starting from AED 700',
            image: 'https://images.unsplash.com/photo-1543353071-86a7f3f3f3a4?w=800'
        }
    ];

    const filteredServices = selectedEvent === 'all'
        ? cateringServices
        : cateringServices.filter(service => service.category === selectedEvent);

    return (
        <div className={styles.catering}>
            <div className={styles.coverSection}>
                <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600"
                    alt="Catering Cover"
                    className={styles.coverImage}
                />
                <div className={styles.coverText}>
                    <h1>Catering Services</h1>
                    <p>Bring the authentic taste of Greece to your special events</p>
                    <p>From intimate gatherings to grand celebrations, we make every occasion memorable</p>
                </div>
            </div>

            <div className={styles.cateringContainer}>
                <div className={styles.eventFilter}>
                    {eventTypes.map(eventType => (
                        <button
                            key={eventType.id}
                            className={`${styles.eventBtn} ${selectedEvent === eventType.id ? styles.active : ''}`}
                            onClick={() => setSelectedEvent(eventType.id)}
                        >
                            {eventType.name}
                        </button>
                    ))}
                </div>

                <div className={styles.servicesGrid}>
                    {filteredServices.map(service => (
                        <div key={service.id} className={styles.serviceCard}>
                            <div className={styles.serviceImage}>
                                <img src={service.image} alt={service.name} />
                            </div>
                            <div className={styles.serviceContent}>
                                <div>
                                    <h3>{service.name}</h3>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                    <div className={styles.serviceFeatures}>
                                        <h4>What's Included:</h4>
                                        <ul>
                                            {service.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.serviceFooter}>
                                    <span className={styles.price}>{service.price}</span>
                                    <button className={styles.inquireBtn}>Inquire Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.cateringInfo}>
                <div className={styles.infoContainer}>
                    <div className={styles.infoSection}>
                        <h2>Why Choose Our Catering?</h2>
                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <h3>Authentic Greek Cuisine</h3>
                                <p>Traditional recipes passed down through generations, ensuring authentic flavors</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>Professional Service</h3>
                                <p>Experienced staff dedicated to making your event perfect</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>Customizable Menus</h3>
                                <p>Tailored menus to suit your preferences and dietary requirements</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3>Fresh Ingredients</h3>
                                <p>Only the finest and freshest ingredients used in every dish</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.contactCta}>
                <h2>Ready to Plan Your Event?</h2>
                <p>Contact us to discuss your catering needs and get a personalized quote</p>
                <div className={styles.ctaButtons}>
                    <a href="/contact" className={styles.primaryBtn}>Get Quote</a>
                    <a href="tel:+9710508047749" className={styles.secondaryBtn}>Call Now</a>
                </div>
            </div>
        </div>
    );
};

export default Catering;
