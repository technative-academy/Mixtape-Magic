import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../slices/authSlice'
import styles from './header.module.css'
import logo from '../../../assets/img/logo.png'

function Header() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const handleLogout = () => {
        dispatch(logout())
    }

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

            {isLoggedIn ? (
                <button className={styles.nav__link} onClick={handleLogout}>
                    Logout
                </button>
            ) : (
                <></>
            )}
        </nav>
    )
}

export default Header
