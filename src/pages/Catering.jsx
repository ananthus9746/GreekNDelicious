import React, { useState } from 'react';
import { FaBirthdayCake, FaBriefcase, FaHeart, FaGraduationCap, FaGift } from 'react-icons/fa';
// import { GiWeddingDress } from 'react-icons/gi';
import { MdCelebration } from 'react-icons/md';
import styles from './Catering.module.css';

const Catering = () => {
    const [selectedEvent, setSelectedEvent] = useState('all');

    const eventTypes = [
        { id: 'all', name: 'All Events', icon: <MdCelebration /> },
        { id: 'birthday', name: 'Birthday Parties', icon: <FaBirthdayCake /> },
        { id: 'corporate', name: 'Corporate Events', icon: <FaBriefcase /> },
        { id: 'wedding', name: 'Weddings', icon: <FaBriefcase /> },
        { id: 'anniversary', name: 'Anniversaries', icon: <FaHeart /> },
        { id: 'graduation', name: 'Graduations', icon: <FaGraduationCap /> },
        { id: 'holiday', name: 'Holiday Celebrations', icon: <FaGift /> }
    ];

    const cateringServices = [
        {
            id: 1,
            name: 'Birthday Party Package',
            category: 'birthday',
            description: 'Complete birthday celebration with authentic Greek delicacies, perfect for all ages',
            features: ['Custom menu selection', 'Party decorations', 'Professional staff', 'Setup and cleanup'],
            image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800',
        },
        {
            id: 2,
            name: 'Corporate Event Package',
            category: 'corporate',
            description: 'Professional catering for business meetings, conferences, and corporate events',
            features: ['Business-friendly menu', 'Professional presentation', 'Flexible timing', 'Dietary accommodations'],
            image: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800',
        },
        {
            id: 3,
            name: 'Wedding Reception',
            category: 'wedding',
            description: 'Elegant wedding catering with traditional Greek dishes and modern presentation',
            features: ['Custom wedding menu', 'Wedding cake service', 'Professional waitstaff', 'Elegant table settings'],
            image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800',
        },
        {
            id: 4,
            name: 'Anniversary Celebration',
            category: 'anniversary',
            description: 'Romantic anniversary dinner with special Greek cuisine arrangements',
            features: ['Romantic setup', 'Special menu options', 'Candlelight service', 'Personalized touches'],
            image: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800',
        },
        {
            id: 5,
            name: 'Graduation Party',
            category: 'graduation',
            description: 'Celebrate academic achievements with delicious Greek food and festive atmosphere',
            features: ['Graduation-themed decorations', 'Variety of appetizers', 'Beverage service', 'Party coordination'],
            image: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800',
        },
        {
            id: 6,
            name: 'Holiday Celebration',
            category: 'holiday',
            description: 'Special holiday menus featuring traditional Greek holiday dishes',
            features: ['Holiday-themed menu', 'Seasonal decorations', 'Family-style service', 'Traditional recipes'],
            image: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800',
        }
    ];

    return (
        <div>
            {/* Hero Section with Background Video */}
            <div className={styles.heroSection}>
                <video autoPlay loop muted playsInline className={styles.heroVideo}>
                    <source src="/catervideo.mp4" type="video/mp4" />
                </video>
                <div className={styles.heroOverlay}>
                    <h1 className={styles.heroTitle}>Crafting Memorable Experiences</h1>
                    <p className={styles.heroSubtitle}>
                        From intimate home gatherings to grand corporate events, we bring exceptional flavors and impeccable service to your table.
                    </p>
                    <button className={styles.heroButton}>Contact</button>
                </div>
            </div>

            {/* Event Filter */}
            <div className={styles.eventFilter}>
                {eventTypes.map(event => (
                    <button
                        key={event.id}
                        className={`${styles.eventButton} ${selectedEvent === event.id ? styles.active : ''}`}
                        onClick={() => setSelectedEvent(event.id)}
                    >
                        {event.icon} {event.name}
                    </button>
                ))}
            </div>

            {/* Service Cards */}
            <div className={styles.cateringList}>
                {cateringServices
                    .filter(service => selectedEvent === 'all' || service.category === selectedEvent)
                    .map(service => (
                        <div key={service.id} className={styles.cateringItem}>
                            <img src={service.image} alt={service.name} className={styles.cateringImage} />
                            <h2 className={styles.cateringName}>{service.name}</h2>
                            <p className={styles.cateringDescription}>{service.description}</p>
                            <ul className={styles.cateringFeatures}>
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Catering;
