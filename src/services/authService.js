import makeApiRequest from './apiService'

const register = async (username, email, password) => {
    return makeApiRequest('api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
    })
}

const login = async (email, password) => {
    const response = await makeApiRequest('api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    })
    const user = {}

    if (response.accessToken) {
        sessionStorage.setItem('accessToken', response.accessToken)
    }

    if (response.id && response.username) {
        user.id = response.id
        user.username = response.username
        sessionStorage.setItem('user', JSON.stringify(user))
    }

    return user
}

const logout = async () => {
    await makeApiRequest('api/auth/logout', {
        method: 'POST',
    })
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('user')
}

const getAccessToken = () => {
    return sessionStorage.getItem('accessToken')
}

const refreshAccessToken = async () => {
    const response = await makeApiRequest('auth/refresh-token', {
        method: 'POST',
    })

    if (response.accessToken) {
        sessionStorage.setItem('accessToken', response.accessToken)
    }

    return response.accessToken
}

const isLoggedIn = () => {
    return !!sessionStorage.getItem('accessToken')
}

const getUser = () => {
    return JSON.parse(sessionStorage.getItem('user'))
}

export default {
    register,
    login,
    logout,
    getAccessToken,
    refreshAccessToken,
    isLoggedIn,
    getUser,
}
