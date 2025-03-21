import styles from './main.module.css'
import CardComponentList from '../cardComponentList/cardComponentList'
import PlaylistNav from '../playlistNav/PlaylistNav'

function Main() {
    return (
        <main>
            <PlaylistNav />
            <section className={styles.main}>
                <h1>Dashboard</h1>
                <CardComponentList />
            </section>
        </main>
    )
}

export default Main
