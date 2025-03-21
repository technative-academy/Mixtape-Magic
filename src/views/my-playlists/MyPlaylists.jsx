import styles from '../../components/ui/main/main.module.css'
import Search from '../../components/ui/search/Search'
import PlaylistNav from '../../components/ui/playlistNav/PlaylistNav'
import CardComponentList from '../../components/ui/cardComponentList/cardComponentList'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyPlaylists } from '../../slices/myPlaylistSlice'

function MyPlaylists() {
    const dispatch = useDispatch()
    const myPlaylists = useSelector((state) => state.myPlaylists.items)
    const status = useSelector((state) => state.myPlaylists.status)
    const error = useSelector((state) => state.myPlaylists.error)

    useEffect(() => {
        dispatch(fetchMyPlaylists())
    }, [dispatch])

    return (
        <main>
            <PlaylistNav />
            <section className={styles.main}>
                <h1>My playlists</h1>
                <Search />
                <CardComponentList
                    playlists={myPlaylists}
                    status={status}
                    error={error}
                />
            </section>
        </main>
    )
}
export default MyPlaylists
