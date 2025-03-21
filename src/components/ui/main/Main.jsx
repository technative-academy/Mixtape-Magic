import styles from './main.module.css'
import CardComponentList from '../cardComponentList/cardComponentList'
import PlaylistNav from '../playlistNav/PlaylistNav'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaylists } from '../../../slices/playlistSlice'

function Main() {
    const dispatch = useDispatch()
    const playlists = useSelector((state) => state.playlists.items)
    const status = useSelector((state) => state.playlists.status)
    const error = useSelector((state) => state.playlists.error)

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [dispatch])

    return (
        <main>
            <PlaylistNav />
            <section className={styles.main}>
                <h1>Dashboard</h1>
                <CardComponentList
                    playlists={playlists}
                    status={status}
                    error={error}
                />
            </section>
        </main>
    )
}

export default Main
