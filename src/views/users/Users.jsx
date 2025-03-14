import styles from '../../components/ui/main/main.module.css'
import Search from '../../components/ui/seacrh/Search'
import PlaylistNav from '../../components/ui/playlistNav/PlaylistNav'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchUsers } from '../../slices/usersSlice'

function Users() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.items)
    const status = useSelector((state) => state.users.status)
    const error = useSelector((state) => state.users.error)

    console.log(users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <main>
            <PlaylistNav />
            <section>
                <h1>Users</h1>
                {status === 'loading' && <div>Loading...</div>}
                {status === 'failed' && <div>{error}</div>}
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <NavLink to={`/users/${user.id}/`}>
                                {user.username}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}
export default Users
