import styles from '../../components/ui/main/main.module.css'
import Search from '../../components/ui/seacrh/Search'
import PlaylistNav from '../../components/ui/playlistNav/PlaylistNav'

function Users() {
    return (
        <main>
            <PlaylistNav />
            <section className={styles.main}>
                <h1>Users</h1>
            </section>
        </main>
    )
}
export default Users
