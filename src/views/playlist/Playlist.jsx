import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchPlaylistById } from '../../slices/singlePlaylistSlice';
import { useDispatch } from "react-redux";

const Playlist = () => {
    const { item: playlist, status, error } = useSelector((state) => state.singlePlaylist);
    const { id } = useParams(); 
    const dispatch = useDispatch(); 

    console.log(id); 
    useEffect(() => {
        if (id) {
            dispatch(fetchPlaylistById(id));
        }
    }, [dispatch, id]); 

    if (!id) {
        return <div>No playlist selected.</div>;
    }

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;
    if (!playlist) return <p>No playlist selected.</p>;

    return (
        <div>
            <h1>{playlist.name}</h1>
            <p>{playlist.description}</p>
            <img 
                src={`${import.meta.env.VITE_API_URL}/${playlist.coverImage}`} 
                alt="Playlist Cover" 
                style={{ width: "200px", borderRadius: "10px" }}
            />

            <h2>Songs</h2>
            <ul>
                {playlist.songs.map((song) => (
                    <li key={song.ID}>
                        <strong>{song.name}</strong> - {song.artist}
                        <audio controls>
                            <source src={`${import.meta.env.VITE_API_URL}/${song.file}`} type="audio/mpeg" />
                        </audio>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;
