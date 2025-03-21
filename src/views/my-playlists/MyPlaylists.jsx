import styles from '../../components/ui/main/main.module.css'
import Search from '../../components/ui/search/Search'
import PlaylistNav from '../../components/ui/playlistNav/PlaylistNav'

function MyPlaylists() {
    return (
        <main>
            <PlaylistNav />
            <section className={styles.main}>
                <h1>My playlists</h1>
                <Search />
            </section>
        </main>
    )
}
export default MyPlaylists
