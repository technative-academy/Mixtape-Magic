import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPlaylistById, updatePlaylist } from "../../slices/singlePlaylistSlice";

const Edit = () => {
    const { item: playlist, status, error } = useSelector((state) => state.singlePlaylist);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        coverImage: "",
        songs: [],
    });

    useEffect(() => {
        if (id) dispatch(fetchPlaylistById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (playlist) {
            setFormData({
                name: playlist.name || "",
                description: playlist.description || "",
                coverImage: playlist.coverImage || "",
                songs: playlist.songs || [],
            });
        }
    }, [playlist]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePlaylist({ playlistId: id, updatedData: formData }))
            .then(() => {
                navigate(`/playlist/${id}`); 
            })
            .catch((error) => console.error("Error updating playlist:", error));
    };

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Edit Playlist</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                </label>
                <label>
                    Cover Image URL:
                    <input type="text" name="coverImage" value={formData.coverImage} onChange={handleChange} />
                </label>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default Edit;
