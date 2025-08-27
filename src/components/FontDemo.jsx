import React from 'react';
import './FontDemo.module.css';

const FontDemo = () => {
    return (
        <div className="font-demo">
            <h1 className="font-aalto">Greek N Delicious</h1>
            <h2 className="font-aalto">Authentic Mediterranean Cuisine</h2>

            <div className="brand-section">
                <h3 className="font-bounties">SPECIAL MENU</h3>
                <p className="font-bounties">Today's Fresh Specials</p>
            </div>

            <div className="content-section">
                <h4 className="font-minion-pro">Our Story</h4>
                <p className="font-minion-pro">
                    Experience the authentic flavors of Greece and the Mediterranean.
                    Our family recipes have been passed down through generations,
                    bringing you the true taste of traditional Greek cuisine.
                </p>
            </div>

            <div className="ui-section">
                <h5 className="font-poppins">Menu Categories</h5>
                <ul className="font-poppins">
                    <li>Appetizers & Meze</li>
                    <li>Main Courses</li>
                    <li>Seafood Specialties</li>
                    <li>Desserts & Coffee</li>
                </ul>

                <button className="font-poppins">Reserve a Table</button>
                <button className="font-poppins">View Full Menu</button>
            </div>

            <div className="elegant-section">
                <p className="font-minion-pro">
                    "The best Greek restaurant in town. Authentic flavors,
                    warm atmosphere, and exceptional service."
                </p>
                <span className="font-aalto">— Food Critic</span>
            </div>
        </div>
    );
};

export default FontDemo;
