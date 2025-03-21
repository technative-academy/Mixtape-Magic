import Root from './components/ui/root/Root'
import Home from './views/home/Home'
import Login from './views/login/Login'
import Register from './views/register/Register'
import Playlist from './views/playlist/Playlist'
import MyPlaylists from './views/my-playlists/MyPlaylists'
import AddPlaylist from './views/add-playlist/AddPlaylist'
import AddSong from './views/add-song/AddSong'
import Edit from './views/edit/Edit'
import Users from './views/users/Users'
import ProtectedRoute from './components/ui/protected-route/ProtectedRoute'

const isAuthenticated = localStorage.getItem('token'); 

const routes = [
    {
        path: '/',
        element: <Root />,
        children: [
            { path: '', element: <Home /> },
            { path: 'login/', element: <Login /> },
            { path: 'register/', element: <Register /> },
            { path: 'playlist/:id/', element: <Playlist /> },
            { path: 'myplaylists', element: <MyPlaylists /> },
            {
                path: 'playlist/add/',
                element: <ProtectedRoute element={<AddPlaylist />} />,
            },
            {
                path: 'playlist/:id/add-song/',
                element: <ProtectedRoute element={<AddSong />} />,
            },
            {
                path: 'playlist/:id/edit/',
                // element: (
                //     <ProtectedRoute>
                //         <Edit />
                //     </ProtectedRoute>
                // ),
                element: <ProtectedRoute element={<Edit />} />,
                // element: <Edit />,
            },

            { path: 'users', element: <Users /> },
        ],
    },
]

export default routes
