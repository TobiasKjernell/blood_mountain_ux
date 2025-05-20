import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>Footer @ {new Date().getFullYear()}</span>
        </footer>
    )
}

export default Footer;