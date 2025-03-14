import { useSelector } from 'react-redux'
import styles from './playlistnav.module.css'
import { NavLink } from 'react-router-dom'

function PlaylistNav() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const links = []

    if (isLoggedIn) {
        links.push({ label: 'My collections', url: '/myplaylists/' })
        links.push({ label: 'Users', url: '/users/' })
        links.push({ label: '+ New collection', url: '/playlist/add/' })
    }

    return (
        <div className={styles.playlistNav}>
            <NavLink to="/">All collections</NavLink>

            {links.map((link) => (
                <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                        isActive ? 'active-link' : 'no'
                    }
                >
                    {link.label}
                </NavLink>
            ))}
        </div>
    )
}

export default PlaylistNav
