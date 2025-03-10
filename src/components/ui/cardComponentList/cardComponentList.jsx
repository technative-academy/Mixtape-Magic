import CardComponent from '../cardComponent/CardComponent'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaylists } from '../../../slices/playlistSlice'
import styles from '../cardComponentList/cardComponentList.module.css'

function CardComponentList() {
    const dispatch = useDispatch()
    const playlists = useSelector((state) => state.playlists.items)
    const status = useSelector((state) => state.playlists.status)
    const error = useSelector((state) => state.playlists.error)

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [dispatch])

    return (
        <div className={styles.playlists}>
            {status === 'loading' && <div>Loading...</div>}
            {status === 'failed' && <div>{error}</div>}
            <ul className="list">
                {playlists.map((playlist) => (
                    <li className="item" key={playlist.id}>
                        
                        <CardComponent playlist={playlist} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CardComponentList
