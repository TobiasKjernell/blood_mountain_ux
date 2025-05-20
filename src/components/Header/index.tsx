import { NavLink } from 'react-router';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles['navItem']}` : "" + styles['navItem']} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles['navItem']}` : "" + styles['navItem']} to="/about">About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles['navItem']}` : "" + styles['navItem']} to="/media">Media</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles['navItem']}` : "" + styles['navItem']} to="/team">Team</NavLink>
                </div>
                <div className={styles.navRight}>
                    <a href='#' className={styles['navItem--buy']}>Itcho</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;