import React, { useState } from 'react';
import styles from './Catering.module.css';

const Catering = () => {
    const [selectedEvent, setSelectedEvent] = useState('all');

    const eventTypes = [
        { id: 'all', name: 'All Events', icon: '🎉' },
        { id: 'birthday', name: 'Birthday Parties', icon: '🎂' },
        { id: 'corporate', name: 'Corporate Events', icon: '💼' },
        { id: 'wedding', name: 'Weddings', icon: '💒' },
        { id: 'anniversary', name: 'Anniversaries', icon: '💕' },
        { id: 'graduation', name: 'Graduations', icon: '🎓' },
        { id: 'holiday', name: 'Holiday Celebrations', icon: '🎊' }
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
            image: 'https://images.unsplash.com/photo-1515378799626-85cda6e3f3a4?w=800',
        },
        {
            id: 5,
            name: 'Graduation Party',
            category: 'graduation',
            description: 'Celebrate academic achievements with delicious Greek food and festive atmosphere',
            features: ['Graduation-themed decorations', 'Variety of appetizers', 'Beverage service', 'Party coordination'],
            image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
        },
        {
            id: 6,
            name: 'Holiday Celebration',
            category: 'holiday',
            description: 'Special holiday menus featuring traditional Greek holiday dishes',
            features: ['Holiday-themed menu', 'Seasonal decorations', 'Family-style service', 'Traditional recipes'],
            image: 'https://images.unsplash.com/photo-1543353071-86a7f3f3f3a4?w=800',
        }
    ];


    return (
       <div>
        0
       </div>

    );
};

export default Catering;