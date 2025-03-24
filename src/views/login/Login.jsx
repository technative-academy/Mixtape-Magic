import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../slices/authSlice'
import styles from '../../views/login/login.module.css'
import Form from '../../components/ui/form/Form'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)
    const authError = useSelector((state) => state.auth.error)
    const isLoading = authStatus === 'loading'
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (authError) {
            setErrorMessage('Invalid credentials. Please try again.') // Sets error message based on API response
        }
    }, [authError])

    const handleLogin = async ({ email, password }) => {
        try {
            await dispatch(login({ email, password })).unwrap()
            navigate('/')
        } catch (error) {
            setErrorMessage('Login failed. Please check your credentials.') // Sets error message in case of incorrect credentials
        }
    }

    return (
        <div className={styles.loginContainer}>
            {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
            )}
            <Form type="Login" onSubmit={handleLogin} isLoading={isLoading} />
        </div>
    )
}

export default Login
