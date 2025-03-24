import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPlaylist } from '../../slices/myPlaylistSlice'
import formstyles from '../../components/ui/form/form.module.css'
import styles from '../../components/ui/main/main.module.css'

const AddPlaylist = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { status, error } = useSelector((state) => state.playlists)

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
        await dispatch(createPlaylist(formData))
        navigate('/myplaylists')
    }

    return (
        <main className={styles.main}>
            <h1>Add New Playlist</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className={formstyles.form} onSubmit={handleSubmit}>
                <div className={formstyles.form__group}>
                    <label htmlFor="name">Playlist Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Playlist Name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={formstyles.form__group}>
                    <label htmlFor="description">Playlist Name</label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className={formstyles.form__group}>
                    <label htmlFor="coverImage">
                        Paste URL to cover image - Upload from link online
                    </label>
                    <input
                        type="text"
                        name="coverImage"
                        placeholder="Cover Image URL (https://)"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Creating...' : 'Create Playlist'}
                </button>
            </form>
        </main>
    )
}

export default AddPlaylist
