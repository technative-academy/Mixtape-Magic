import styles from '../../components/ui/main/main.module.css'
import userStyles from './user.module.css'
import PlaylistNav from '../../components/ui/playlistNav/PlaylistNav'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
            <section className={styles.main}>
                <h1>Users</h1>
                {status === 'loading' && <div>Loading...</div>}
                {status === 'failed' && <div>{error}</div>}
                <div className={userStyles.users}>
                    {users.map((user) => (
                        <div className={userStyles.users__card}>
                            <img
                                src="https://images.unsplash.com/photo-1718501593189-5d7d4bdf5702?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="The logo of the company"
                                className={styles.card__img}
                            />
                            {user.username}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
export default Users
