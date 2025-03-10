import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './header.module.css';
import logo from '../../../assets/img/logo.png'; 


function Header() {
	// const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const isLoggedIn = false;

	const navLinks = [
		{ label: 'Home', url: '/' },
	];

	if (!isLoggedIn) {
		navLinks.push({ label: 'Sign up', url: '/register/' });
		navLinks.push({ label: 'Log in', url: '/login/' });
	}

	if (isLoggedIn) {
		navLinks.push({ label: 'Users', url: '/users/' });
	}

	return (
		<nav className={styles.nav}>
		<img src={logo} alt="The logo of the company" width={50} height={50}/>
			{navLinks.map((navLink) => (
				<NavLink
					key={navLink.url}
					to={navLink.url}
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.inactiveLink
					}
				>
					{navLink.label}
				</NavLink>
			))}
		</nav>
	);
}

export default Header;
