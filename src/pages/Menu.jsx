import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Dishes', icon: '🍽️' },
        { id: 'appetizers', name: 'Mezze & Appetizers', icon: '🫒' },
        { id: 'soups', name: 'Soups', icon: '🍲' },
        { id: 'gyros', name: 'Gyros & Wraps', icon: '🌯' },
        { id: 'main', name: 'Main Courses', icon: '🍖' },
        { id: 'seafood', name: 'Fresh Seafood', icon: '🐟' },
        { id: 'salads', name: 'Greek Salads', icon: '🥗' },
        { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
        { id: 'desserts', name: 'Desserts', icon: '🍯' },
        { id: 'drinks', name: 'Beverages', icon: '☕' }
    ];

    const menuItems = [
        // Appetizers
        {
            id: 1,
            name: 'Traditional Tzatziki',
            category: 'appetizers',
            description: 'Creamy Greek yogurt with cucumber, garlic, olive oil, and fresh dill. Served with warm pita bread.',
            price: 'AED 18',
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
            popular: true,
            vegetarian: true
        },
        {
            id: 2,
            name: 'Spanakopita Triangles',
            category: 'appetizers',
            description: 'Crispy phyllo pastry filled with spinach, feta cheese, and herbs. A classic Greek favorite.',
            price: 'AED 22',
            image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400&h=300&fit=crop',
            vegetarian: true
        },
        {
            id: 3,
            name: 'Dolmades',
            category: 'appetizers',
            description: 'Hand-rolled grape leaves stuffed with rice, pine nuts, and aromatic herbs.',
            price: 'AED 24',
            image: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=400&h=300&fit=crop',
            vegetarian: true
        },
        {
            id: 4,
            name: 'Grilled Halloumi',
            category: 'appetizers',
            description: 'Traditional Cypriot cheese grilled to perfection, drizzled with honey and oregano.',
            price: 'AED 26',
            image: 'https://images.unsplash.com/photo-1571197119279-7ba0c175c34b?w=400&h=300&fit=crop',
            vegetarian: true
        },
        {
            id: 5,
            name: 'Mezze Platter',
            category: 'appetizers',
            description: 'A selection of hummus, tzatziki, olives, feta, and fresh vegetables with pita bread.',
            price: 'AED 42',
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
            popular: true,
            vegetarian: true
        },

        // Soups
        {
            id: 6,
            name: 'Avgolemono Soup',
            category: 'soups',
            description: 'Traditional Greek chicken soup with rice, finished with egg-lemon sauce.',
            price: 'AED 19',
            image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
        },
        {
            id: 7,
            name: 'Mediterranean Lentil Soup',
            category: 'soups',
            description: 'Hearty red lentil soup with tomatoes, onions, and Mediterranean herbs.',
            price: 'AED 17',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
            vegetarian: true
        },

        // Gyros
        {
            id: 8,
            name: 'Traditional Pork Gyros',
            category: 'gyros',
            description: 'Slow-cooked marinated pork with tomatoes, onions, tzatziki, and fries wrapped in warm pita.',
            price: 'AED 32',
            image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop',
            popular: true
        },
        {
            id: 9,
            name: 'Chicken Gyros Deluxe',
            category: 'gyros',
            description: 'Tender marinated chicken with fresh vegetables, tzatziki, and our signature sauce.',
            price: 'AED 30',
            image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763328?w=400&h=300&fit=crop'
        },
        {
            id: 10,
            name: 'Lamb Gyros Supreme',
            category: 'gyros',
            description: 'Premium lamb with grilled vegetables, feta cheese, and herb-infused tzatziki.',
            price: 'AED 38',
            image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop'
        },
        {
            id: 11,
            name: 'Vegetarian Gyros',
            category: 'gyros',
            description: 'Grilled vegetables, halloumi cheese, hummus, and fresh herbs in warm pita.',
            price: 'AED 28',
            image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763328?w=400&h=300&fit=crop',
            vegetarian: true
        },

        // Main Courses
        {
            id: 12,
            name: 'Moussaka Classique',
            category: 'main',
            description: 'Layers of eggplant, spiced ground lamb, and creamy béchamel sauce, baked to golden perfection.',
            price: 'AED 48',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
            popular: true
        },
        {
            id: 13,
            name: 'Lamb Souvlaki Platter',
            category: 'main',
            description: 'Grilled lamb skewers marinated in olive oil, lemon, and herbs. Served with rice and grilled vegetables.',
            price: 'AED 52',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop'
        },
        {
            id: 14,
            name: 'Chicken Kleftiko',
            category: 'main',
            description: 'Slow-roasted chicken with potatoes, tomatoes, and aromatic herbs wrapped in parchment.',
            price: 'AED 45',
            image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop'
        },
        {
            id: 15,
            name: 'Pastitsio',
            category: 'main',
            description: 'Greek-style pasta bake with layers of macaroni, meat sauce, and creamy béchamel.',
            price: 'AED 44',
            image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=300&fit=crop'
        },

        // Seafood
        {
            id: 16,
            name: 'Grilled Branzino',
            category: 'seafood',
            description: 'Whole Mediterranean sea bass grilled with lemon, olive oil, and fresh herbs.',
            price: 'AED 65',
            image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=300&fit=crop',
            popular: true
        },
        {
            id: 17,
            name: 'Prawns Saganaki',
            category: 'seafood',
            description: 'Jumbo prawns in rich tomato sauce with feta cheese, baked in a traditional saganaki pan.',
            price: 'AED 58',
            image: 'https://images.unsplash.com/photo-1563739740663-6a9a2a318293?w=400&h=300&fit=crop'
        },
        {
            id: 18,
            name: 'Octopus Krasato',
            category: 'seafood',
            description: 'Tender octopus braised in red wine with pearl onions and aromatic spices.',
            price: 'AED 62',
            image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=300&fit=crop'
        },

        // Salads
        {
            id: 19,
            name: 'Village Greek Salad',
            category: 'salads',
            description: 'Tomatoes, cucumbers, olives, red onion, and feta cheese with olive oil and oregano.',
            price: 'AED 28',
            image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=400&h=300&fit=crop',
            popular: true,
            vegetarian: true
        },
        {
            id: 20,
            name: 'Dakos Salad',
            category: 'salads',
            description: 'Cretan barley rusks topped with tomatoes, mizithra cheese, and drizzled with olive oil.',
            price: 'AED 26',
            image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=400&h=300&fit=crop',
            vegetarian: true
        },

        // Vegetarian
        {
            id: 21,
            name: 'Gemista (Stuffed Vegetables)',
            category: 'vegetarian',
            description: 'Tomatoes and peppers stuffed with rice, herbs, and pine nuts, baked in olive oil.',
            price: 'AED 35',
            image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop',
            vegetarian: true
        },
        {
            id: 22,
            name: 'Fasolada',
            category: 'vegetarian',
            description: 'Traditional Greek white bean soup with vegetables, tomatoes, and olive oil.',
            price: 'AED 24',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
            vegetarian: true
        },

        // Desserts
        {
            id: 23,
            name: 'Baklava Honey Layers',
            category: 'desserts',
            description: 'Flaky phyllo pastry with walnuts and pistachios, soaked in honey syrup.',
            price: 'AED 22',
            image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop',
            popular: true,
            vegetarian: true
        },
        {
            id: 24,
            name: 'Galaktoboureko',
            category: 'desserts',
            description: 'Custard-filled phyllo pastry topped with aromatic syrup and crushed pistachios.',
            price: 'AED 24',
            image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
            vegetarian: true
        },
        {
            id: 25,
            name: 'Greek Yogurt with Honey',
            category: 'desserts',
            description: 'Thick Greek yogurt drizzled with Hymettus honey and topped with crushed walnuts.',
            price: 'AED 18',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
            vegetarian: true
        },

        // Drinks
        {
            id: 26,
            name: 'Greek Coffee',
            category: 'drinks',
            description: 'Traditional strong coffee served in small cups with a glass of cold water.',
            price: 'AED 15',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
        },
        {
            id: 27,
            name: 'Frappé',
            category: 'drinks',
            description: 'Iced coffee drink made with instant coffee, water, sugar, and milk.',
            price: 'AED 18',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
        },
        {
            id: 28,
            name: 'Fresh Lemonade',
            category: 'drinks',
            description: 'Freshly squeezed lemons with sparkling water and mint leaves.',
            price: 'AED 16',
            image: 'https://images.unsplash.com/photo-1523371683702-80debad78cd1?w=400&h=300&fit=crop',
            vegetarian: true
        },
        {
            id: 29,
            name: 'Greek Mountain Tea',
            category: 'drinks',
            description: 'Traditional herbal tea from the Greek mountains, served with honey.',
            price: 'AED 14',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            vegetarian: true
        }
    ];

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className={styles.menuContainer}>
            {/* Hero Section */}
            <div className={styles.menuHero}>
                <div className={styles.heroContent}>
                    <div className={styles.greekPattern}></div>
                    <h1>ΑΥΘΕΝΤΙΚΉ ΓΕΎΣΗ</h1>
                    <h2>Our Traditional Menu</h2>
                    <p>Experience the authentic flavors of Greece with recipes passed down through generations</p>
                    <div className={styles.heroStats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>25+</span>
                            <span className={styles.statLabel}>Traditional Dishes</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Fresh Ingredients</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                    <h2>Explore Our Menu</h2>
                    <p>Choose from our carefully curated selection of authentic Greek dishes</p>
                </div>
                <div className={styles.categoryGrid}>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`${styles.categoryCard} ${activeCategory === category.id ? styles.active : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className={styles.categoryIcon}>{category.icon}</span>
                            <span className={styles.categoryName}>{category.name}</span>
                            <span className={styles.itemCount}>
                                {category.id === 'all'
                                    ? menuItems.length
                                    : menuItems.filter(item => item.category === category.id).length} items
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Items */}
            <div className={styles.menuSection}>
                <div className={styles.menuGrid}>
                    {filteredItems.map(item => (
                        <div key={item.id} className={styles.menuItemCard}>
                            {item.popular && (
                                <div className={styles.popularBadge}>
                                    <span>🔥 Popular</span>
                                </div>
                            )}
                            <div className={styles.itemImage}>
                                <img src={item.image} alt={item.name} loading="lazy" />
                                <div className={styles.itemOverlay}>
                                    <button className={styles.quickOrderBtn}>Quick Order</button>
                                </div>
                            </div>
                            <div className={styles.itemContent}>
                                <div className={styles.itemHeader}>
                                    <h3 className={styles.itemName}>{item.name}</h3>
                                    <div className={styles.itemBadges}>
                                        {item.vegetarian && <span className={styles.vegBadge}>🌱</span>}
                                    </div>
                                </div>
                                <p className={styles.itemDescription}>{item.description}</p>
                                <div className={styles.itemFooter}>
                                    <span className={styles.itemPrice}>{item.price}</span>
                                    <button className={styles.addToCartBtn}>
                                        <span>Add to Cart</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className={styles.menuCta}>
                <div className={styles.ctaContent}>
                    <div className={styles.ctaText}>
                        <h2>Craving Authentic Greek Flavors?</h2>
                        <p>Join us for an unforgettable dining experience or enjoy our delicious food at home</p>
                    </div>
                    <div className={styles.ctaActions}>
                        <button className={styles.primaryCtaBtn}>
                            <span>Reserve Your Table</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className={styles.secondaryCtaBtn}>
                            <span>Order for Delivery</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 17h8l-2-8H9l-1-5H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="9" cy="20" r="1" stroke="currentColor" strokeWidth="2" />
                                <circle cx="20" cy="20" r="1" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.ctaContact}>
                    <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>📞</span>
                        <div>
                            <span className={styles.contactLabel}>Call Us</span>
                            <span className={styles.contactValue}>+971 4 123 4567</span>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>📍</span>
                        <div>
                            <span className={styles.contactLabel}>Visit Us</span>
                            <span className={styles.contactValue}>Downtown Dubai, UAE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;