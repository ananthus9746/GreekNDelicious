import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebookF, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            alert('Thank you for your message! We will get back to you soon.');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        }, 1000);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.contact}>
            <div className={styles.contactHeader}>
                <h1>CONTACT US</h1>
                <p>Get in touch with us for reservations, catering inquiries, or any questions</p>
                                    <button className={styles.heroButton}>Message Us</button>
                
            </div>

            <div className={styles.contactContainer}>
                {/* Left Section */}
                <div className={styles.contactInfo}>
                    <div className={styles.infoSection}>
                        <h2>Get In Touch</h2>
                        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    </div>

                    <div className={styles.contactDetails}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}><FaPhoneAlt /></div>
                            <div className={styles.contactText}>
                                <h3>Phone</h3>
                                <p>+971 050 804 7749</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}><FaEnvelope /></div>
                            <div className={styles.contactText}>
                                <h3>Email</h3>
                                <p>info@greekndeliciuos.ae</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}><FaMapMarkerAlt /></div>
                            <div className={styles.contactText}>
                                <h3>Address</h3>
                                <p>Saba Tower 1 - Shop S07-Cluster E<br />Jumeirah Lake Towers - Dubai</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}><FaClock /></div>
                            <div className={styles.contactText}>
                                <h3>Opening Hours</h3>
                                <p>Monday to Sunday<br />9 am – 10 pm<br />Open everyday</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socialSection}>
                        <h3>Follow Us</h3>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink}><FaInstagram /></a>
                            <a href="#" className={styles.socialLink}><FaFacebookF /></a>
                            <a href="#" className={styles.socialLink}><FaPinterestP /></a>
                            <a href="#" className={styles.socialLink}><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className={styles.contactForm}>
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell us about your inquiry, reservation request, or catering needs..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            {/* FAQ */}
            <div className={styles.faqSection}>
                <div className={styles.faqContainer}>
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>Can I reserve a table?</h3>
                            <p>Yes! You can reserve a table by calling us at +971 050 804 7749 or using our contact form above.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do you offer vegetarian options?</h3>
                            <p>Absolutely! We have a variety of delicious vegetarian dishes including Greek salads, vegetable moussaka, and more.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Are there gluten-free options?</h3>
                            <p>Yes, we offer several gluten-free options. Please let us know about any dietary restrictions when ordering.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What are the opening hours?</h3>
                            <p>We are open Monday to Sunday from 9 am to 10 pm, every day of the week.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Are your meats halal?</h3>
                            <p>Yes, all our meat is halal certified and prepared according to Islamic dietary guidelines.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can I order online?</h3>
                            <p>Currently, we accept orders by phone. Online ordering will be available soon!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
