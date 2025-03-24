import { useSelector } from 'react-redux'
import styles from './playlistnav.module.css'
import { NavLink } from 'react-router-dom'

function PlaylistNav() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const path = window.location.pathname
    const links = [{ label: 'Home', url: '/' }]

    if (path == '/' || path == '/users/' || path == '/myplaylists/') {
        if (isLoggedIn) {
            links.push({ label: 'My Playlists', url: '/myplaylists/' })
            links.push({ label: 'Users', url: '/users/' })
        }
    } else {
        links.pop()
        links.push({ label: 'Back', url: '/' })
    }

    if (isLoggedIn) {
        links.push({
            label: 'New Playlist',
            url: '/playlist/add/',
            class: 'button',
        })
    }

    return (
        <div className={styles.playlistNav}>
            {links.map((link) => (
                <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                        isActive ? styles.active : ''
                    }
                >
                    {link.label}
                </NavLink>
            ))}
        </div>
    )
}

export default PlaylistNav
