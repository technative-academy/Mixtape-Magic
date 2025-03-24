import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { addSong } from '../../slices/myPlaylistSlice'
import formstyles from '../../components/ui/form/form.module.css'
import styles from '../../components/ui/main/main.module.css'

const AddSong = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { status, error } = useSelector((state) => state.myPlaylists)
    const { item: playlist } = useSelector((state) => state.singlePlaylist)

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        coverImage: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(addSong({ playlistId: id, updatedData: formData }))
            .then(() => {
                navigate(`/playlist/${id}`)
            })
            .catch((error) => console.error('Error adding song:', error))
    }

    return (
        <main className={styles.main}>
            <h1 className="text-xl font-bold mb-4">Add song to playlist</h1>
            <p>{playlist.name}</p>
            {error && <p className="text-red-500">{error}</p>}
            <form className={formstyles.form} onSubmit={handleSubmit}>
                <div className={formstyles.form__group}>
                    <label htmlFor="name">Song Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Song Name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={formstyles.form__group}>
                    <label htmlFor="description">Artist</label>
                    <input
                        type="text"
                        name="artist"
                        placeholder="Artist"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={formstyles.form__group}>
                    <label htmlFor="description">
                        Song URL - Upload from link online
                    </label>
                    <input
                        type="text"
                        name="file"
                        placeholder="Song URL (https://)"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Adding...' : 'Add song'}
                </button>
            </form>
        </main>
    )
}

export default AddSong
