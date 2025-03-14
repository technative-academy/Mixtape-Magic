import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/authService'
import { login } from '../../slices/authSlice'
import Form from '../../components/ui/form/Form'

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)
    const authError = useSelector((state) => state.auth.error)
    const isLoading = authStatus === 'loading'

    const handleRegister = async ({ username, email, password }) => {
        try {
            await authService.register(username, email, password)
            await dispatch(login({ email, password })).unwrap()
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Form
            type="Register"
            onSubmit={handleRegister}
            isLoading={isLoading}
            error={authError}
        />
    )
}

export default Register
