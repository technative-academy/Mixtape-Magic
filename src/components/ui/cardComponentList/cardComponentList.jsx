import CardComponent from '../cardComponent/CardComponent'
import LoadingComponent from '../loadingComponent/LoadingComponent'
import { useEffect } from 'react'
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

    return (
        <div className={styles.playlists}>
            {status === 'loading' && <LoadingComponent />}
            {status === 'failed' && <div>{error}</div>}
            {playlists.map((playlist) => (
                <CardComponent playlist={playlist} />
            ))}
        </div>
    )
}

export default CardComponentList
