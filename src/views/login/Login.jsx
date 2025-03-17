import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../slices/authSlice'
import LoadingComponent from '../../components/ui/loadingComponent/LoadingComponent'

import Form from '../../components/ui/form/Form'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)
    const authError = useSelector((state) => state.auth.error)
    const isLoading = authStatus === <LoadingComponent />

    const handleLogin = async ({ email, password }) => {
        try {
            await dispatch(login({ email, password })).unwrap()
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Form
            type="Login"
            onSubmit={handleLogin}
            isLoading={isLoading}
            error={authError}
        />
    )
}

export default Login
