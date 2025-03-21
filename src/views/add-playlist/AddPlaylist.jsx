import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPlaylist } from '../../slices/myPlaylistSlice'

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
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Create a New Playlist</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Playlist Name"
                    className="w-full p-2 border mb-3"
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    className="w-full p-2 border mb-3"
                    onChange={handleChange}
                ></textarea>
                <input
                    type="text"
                    name="coverImage"
                    placeholder="Cover Image URL"
                    className="w-full p-2 border mb-3"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Creating...' : 'Create Playlist'}
                </button>
            </form>
        </div>
    )
}

export default AddPlaylist
