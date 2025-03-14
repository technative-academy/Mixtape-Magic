import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <a
                    className={styles.footer__link}
                    href="https://github.com/technative-academy/Mixtape-Magic"
                >
                    Github
                </a>
                <a
                    className={styles.footer__link}
                    href="https://github.com/technative-academy/mixtape-magic-api"
                >
                    API Github
                </a>
            </div>
            <p>© 2025 Copyright. All rights reserved.</p>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookies</a>
        </footer>
    )
}

export default Footer
