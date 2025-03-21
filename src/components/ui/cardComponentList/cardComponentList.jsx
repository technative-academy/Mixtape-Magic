import CardComponent from '../cardComponent/CardComponent'
import LoadingComponent from '../loadingComponent/LoadingComponent'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaylists } from '../../../slices/playlistSlice'
import styles from '../cardComponentList/cardComponentList.module.css'

function CardComponentList() {
    const dispatch = useDispatch()
    const playlists = useSelector((state) => state.playlists.items)
    const status = useSelector((state) => state.playlists.status)
    const error = useSelector((state) => state.playlists.error)
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredPlaylists, setFilteredPlaylists] = useState([])

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [dispatch])

    useEffect(() => {
        const lowercasedSearchTerm = searchTerm.toLowerCase()
        const filtered = playlists.filter(
            (playlist) =>
                playlist.name.toLowerCase().includes(lowercasedSearchTerm) ||
                (playlist.description &&
                    playlist.description
                        .toLowerCase()
                        .includes(lowercasedSearchTerm)) ||
                (playlist.tags &&
                    playlist.tags.some((tag) =>
                        tag.toLowerCase().includes(lowercasedSearchTerm)
                    ))
        )
        setFilteredPlaylists(filtered)
    }, [searchTerm, playlists])

    return (
        <div>
            <input
                type="text"
                placeholder="Search playlists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
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
