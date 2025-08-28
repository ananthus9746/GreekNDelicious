import React, { useEffect, useState } from 'react';
import { FaBirthdayCake, FaBriefcase, FaHeart, FaGraduationCap, FaGift } from 'react-icons/fa';
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
            description: 'Transform your special day into an unforgettable celebration with our comprehensive birthday party catering service. We specialize in creating magical moments that bring families and friends together around authentic Greek cuisine.',
            detailedDescription: 'Our birthday party package is designed to take the stress out of party planning while delivering an exceptional culinary experience. From intimate family gatherings to large celebrations, we customize every aspect to match your vision and dietary preferences.',
            features: [
                'Custom menu selection with authentic Greek specialties',
                'Professional party decorations and themed setup',
                'Experienced staff for seamless service',
                'Complete setup and cleanup service',
                'Birthday cake and dessert options',
                'Kid-friendly menu alternatives available'
            ],
            menuHighlights: [
                'Traditional Greek mezze platters',
                'Grilled souvlaki and gyros',
                'Fresh Greek salads and dips',
                'Baklava and Greek pastries',
                'Custom birthday cakes'
            ],
            pricing: 'Starting from $25 per person',
            image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            additionalInfo: 'We provide all necessary equipment including tables, chairs, linens, and serving dishes. Our team arrives 2 hours before your event to ensure everything is perfectly prepared.'
        },
        {
            id: 2,
            name: 'Corporate Event Package',
            category: 'corporate',
            description: 'Elevate your business events with our professional catering service. Whether it\'s a board meeting, conference, or company celebration, we deliver sophisticated cuisine that impresses clients and motivates teams.',
            detailedDescription: 'Our corporate catering service understands the unique needs of business environments. We provide reliable, punctual service with presentation-ready dishes that facilitate networking and business discussions.',
            features: [
                'Business-appropriate menu selections',
                'Professional presentation and service',
                'Flexible timing to match your schedule',
                'Comprehensive dietary accommodation options',
                'Corporate-grade equipment and setup',
                'Discrete and efficient service staff'
            ],
            menuHighlights: [
                'Executive lunch boxes',
                'Mediterranean buffet spreads',
                'Coffee break pastries and snacks',
                'Formal plated dinner options',
                'Healthy salad and grain bowl options'
            ],
            pricing: 'Starting from $18 per person',
            image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            additionalInfo: 'All corporate packages include professional serving staff, premium linens, and coordination with your event timeline. We offer early morning and late evening service options.'
        },
        {
            id: 3,
            name: 'Wedding Reception',
            category: 'wedding',
            description: 'Create the wedding of your dreams with our elegant catering service. We combine traditional Greek hospitality with modern culinary artistry to make your special day absolutely perfect.',
            detailedDescription: 'Your wedding day deserves nothing less than perfection. Our wedding catering service provides a complete culinary experience that reflects your personal style while honoring Greek traditions of celebration and hospitality.',
            features: [
                'Custom wedding menu consultation',
                'Multi-course plated dinners or buffet options',
                'Wedding cake design and service',
                'Professional waitstaff and service team',
                'Elegant table settings and centerpieces',
                'Bridal party and vendor meal coordination'
            ],
            menuHighlights: [
                'Signature cocktail hour appetizers',
                'Traditional Greek wedding cookies',
                'Premium lamb and seafood entrees',
                'Vegetarian and vegan options',
                'Custom wedding cake designs'
            ],
            pricing: 'Starting from $45 per person',
            image: 'https://images.unsplash.com/photo-1658786839292-1b9ca7bf4a53?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            additionalInfo: 'Wedding packages include a dedicated wedding coordinator, complimentary tasting for up to 6 people, and coordination with your other vendors for seamless execution.'
        },
        {
            id: 4,
            name: 'Anniversary Celebration',
            category: 'anniversary',
            description: 'Celebrate your love story with an intimate anniversary dinner that captures the romance and significance of your journey together. Our specialized service creates the perfect atmosphere for your milestone celebration.',
            detailedDescription: 'Anniversary celebrations deserve special attention to detail. We create romantic dining experiences that honor your relationship while providing exceptional Greek cuisine in an atmosphere of warmth and elegance.',
            features: [
                'Romantic candlelit dinner setup',
                'Personalized menu selections',
                'Intimate table arrangements',
                'Special dietary accommodations',
                'Professional photography coordination',
                'Custom celebration touches'
            ],
            menuHighlights: [
                'Romantic two-person sharing platters',
                'Premium wine pairings',
                'Aphrodite-inspired appetizers',
                'Decadent Greek desserts',
                'Champagne and celebration drinks'
            ],
            pricing: 'Starting from $65 per couple',
            image: 'https://images.unsplash.com/photo-1617201460038-6e5555a8a1f5?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            additionalInfo: 'Anniversary packages can be customized for home dining, private venues, or restaurant settings. We offer special anniversary cake options and keepsake menu cards.'
        },
        {
            id: 5,
            name: 'Graduation Party',
            category: 'graduation',
            description: 'Honor academic achievements with a celebration that matches the significance of this milestone. Our graduation catering brings families together to celebrate success with delicious Greek cuisine.',
            detailedDescription: 'Graduation parties are about celebrating accomplishment and looking forward to the future. We create festive atmospheres that accommodate multi-generational celebrations with menu options that please everyone.',
            features: [
                'Graduation-themed decorations and setup',
                'Diverse appetizer and finger food options',
                'Full beverage service including specialty drinks',
                'Professional party coordination',
                'Photo-worthy presentation displays',
                'Flexible indoor/outdoor setup options'
            ],
            menuHighlights: [
                'Celebratory appetizer stations',
                'Greek street food favorites',
                'Fresh fruit and dessert displays',
                'Graduation-themed custom cakes',
                'Non-alcoholic signature mocktails'
            ],
            pricing: 'Starting from $22 per person',
            image: 'https://images.unsplash.com/photo-1559903087-6ee0ea56c849?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            additionalInfo: 'Graduation packages include congratulatory decorations, photo backdrop setup, and coordination with graduation party timelines. We offer special graduate recognition moments.'
        },
        {
            id: 6,
            name: 'Holiday Celebration',
            category: 'holiday',
            description: 'Experience the warmth of Greek holiday traditions with our seasonal catering service. We bring authentic holiday flavors and festive atmosphere to your family gatherings and seasonal celebrations.',
            detailedDescription: 'Holiday celebrations are about tradition, family, and creating lasting memories. Our holiday catering honors both Greek customs and contemporary celebration styles, creating perfect fusion experiences.',
            features: [
                'Traditional Greek holiday menu specialties',
                'Seasonal decorations and themed presentation',
                'Family-style serving options',
                'Traditional recipe authenticity',
                'Multi-generational menu appeal',
                'Custom holiday centerpieces'
            ],
            menuHighlights: [
                'Traditional holiday lamb preparations',
                'Seasonal Greek pastries and sweets',
                'Holiday-spiced appetizers',
                'Festive bread and cheese selections',
                'Traditional holiday cookies and treats'
            ],
            pricing: 'Starting from $28 per person',
            image: 'https://images.unsplash.com/photo-1638374705296-1e131b543615?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            additionalInfo: 'Holiday packages include traditional Greek holiday decorations, family-style serving dishes, and can accommodate specific religious or cultural dietary requirements.'
        }
    ];

    const filteredServices = cateringServices.filter(service =>
        selectedEvent === 'all' || service.category === selectedEvent
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            {/* Hero Section with Background Video */}
            <div className={styles.heroSection}>
                <video autoPlay loop muted playsInline className={styles.heroVideo} loading="lazy">
                    <source src="/catervideo.mp4" type="video/mp4" />
                </video>
                <div className={styles.heroOverlay}>
                    <h1 className={styles.heroTitle}>Crafting Memorable Experiences</h1>
                    <p className={styles.heroSubtitle}>
                        From intimate home gatherings to grand corporate events, we bring exceptional flavors and impeccable service to your table.
                    </p>
                    <button className={styles.heroButton}>Contact us</button>
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

            {/* Service Sections */}
            <div className={styles.servicesContainer}>
                {filteredServices.map((service, index) => (
                    <section key={service.id} className={`${styles.serviceSection} ${index % 2 === 1 ? styles.reversed : ''}`}>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceText}>
                                <div className={styles.serviceHeader}>
                                    <h2 className={styles.serviceName}>{service.name}</h2>
                                    {/* <div className={styles.servicePricing}>{service.pricing}</div> */}
                                </div>

                                <p className={styles.serviceDescription}>{service.description}</p>
                                <p className={styles.serviceDetailedDescription}>{service.detailedDescription}</p>

                                <div className={styles.serviceFeatures}>
                                    <h3>What's Included:</h3>
                                    <ul>
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.menuHighlights}>
                                    <h3>Menu Highlights:</h3>
                                    <ul>
                                        {service.menuHighlights.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.additionalInfo}>
                                    <p><strong>Additional Information:</strong> {service.additionalInfo}</p>
                                </div>

                                <div className={styles.serviceActions}>
                                    <button className={styles.contactButton}>Get Quote</button>
                                    <button className={styles.learnMoreButton}>Learn More</button>
                                </div>
                            </div>

                            <div className={styles.serviceImage}>
                                <img src={service.image} alt={service.name} loading="lazy" />
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Catering;