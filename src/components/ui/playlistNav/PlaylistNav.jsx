import styles from './playlistnav.module.css'
import { NavLink } from 'react-router-dom'

function PlaylistNav() {
    const isLoggedIn = false

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
                <NavLink to={link.url}>{link.label}</NavLink>
            ))}
        </div>
    )
}

export default PlaylistNav
