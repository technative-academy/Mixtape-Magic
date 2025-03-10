import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <a className={styles.footer__link} href="#">
                    Footer Link 1
                </a>
                <a className={styles.footer__link} href="#">
                    Footer Link 2
                </a>
            </div>
            <p>© 2025 Copyright. All rights reserved.</p>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookies</a>
        </footer>
    )
}

export default Footer
