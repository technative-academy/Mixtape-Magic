import CardComponent from '../cardComponent/CardComponent'
import LoadingComponent from '../loadingComponent/LoadingComponent'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaylists } from '../../../slices/playlistSlice'
import styles from '../cardComponentList/cardComponentList.module.css'
import Search from '../search/Search'

function CardComponentList() {
    const dispatch = useDispatch()
    const playlists = useSelector((state) => state.playlists.items)
    const status = useSelector((state) => state.playlists.status)
    const error = useSelector((state) => state.playlists.error)
    const [filteredPlaylists, setFilteredPlaylists] = useState([])

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [dispatch])

    useEffect(() => {
        setFilteredPlaylists(playlists)
    }, [playlists])

    return (
        <div>
            <Search
                playlists={playlists}
                onSearch={(filtered) => setFilteredPlaylists(filtered)}
            />
            <div className={styles.playlists}>
                {status === 'loading' && <LoadingComponent />}
                {status === 'failed' && <div>{error}</div>}
                {filteredPlaylists.length === 0 && status === 'succeeded' && (
                    <div>No playlists found</div>
                )}
                {filteredPlaylists.map((playlist) => (
                    <CardComponent key={playlist.id} playlist={playlist} />
                ))}
            </div>
        </div>
    )
}

export default CardComponentList
