import React from 'react'
import styles from './Menu.module.css';
import menu1 from '../assets/menuimage/Greek n Delicious menu final_page-0002.jpg'
import menu2 from '../assets/menuimage/Greek n Delicious menu final_page-0003.jpg'
import menu3 from '../assets/menuimage/Greek n Delicious menu final_page-0004.jpg'
import menu4 from '../assets/menuimage/Greek n Delicious menu final_page-0005.jpg'
import menu5 from '../assets/menuimage/Greek n Delicious menu final_page-0006.jpg'

function Menu() {
    return (
        <div className={styles.menuWrapper}>
            <div className={styles.menuHeader}>
                <h1 className={styles.menuTitle}>OUR MENU</h1>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.menuButton}>Download/View Menu</button>
            </div>

            <div className={styles.menuContainer}>
                <img src={menu1} alt="Menu Cover" className={styles.menuImage} />
                <img src={menu2} alt="Menu Page 2" className={styles.menuImage} />
                <img src={menu3} alt="Menu Page 3" className={styles.menuImage} />
                <img src={menu4} alt="Menu Page 4" className={styles.menuImage} />
                <img src={menu5} alt="Menu Page 5" className={styles.menuImage} />
            </div>


        </div>
    )
}

export default Menu