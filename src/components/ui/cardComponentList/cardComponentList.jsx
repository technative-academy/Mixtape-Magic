import CardComponent from '../cardComponent/CardComponent'
import LoadingComponent from '../loadingComponent/LoadingComponent'
import styles from '../cardComponentList/cardComponentList.module.css'

function CardComponentList(props) {
    const { playlists, status, error } = props
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
