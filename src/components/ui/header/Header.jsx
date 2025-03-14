import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './header.module.css'
import logo from '../../../assets/img/logo.png'

function Header() {
    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const isLoggedIn = false

    const navLinks = []

    if (!isLoggedIn) {
        navLinks.push({ label: 'Sign up', url: '/register/' })
        navLinks.push({ label: 'Log in', url: '/login/' })
    }

    if (isLoggedIn) {
        navLinks.push({ label: 'Users', url: '/users/' })
    }

    return (
        <nav className={styles.nav}>
            <NavLink to="/">
                <img src={logo} alt="The logo of the company" />
            </NavLink>

            {navLinks.map((navLink) => (
                <NavLink
                    key={navLink.url}
                    to={navLink.url}
                    className={styles.nav__link}
                >
                    {navLink.label}
                </NavLink>
            ))}
        </nav>
    )
}

export default Header
