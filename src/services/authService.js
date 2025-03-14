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

    if (response.accessToken) {
        sessionStorage.setItem('accessToken', response.accessToken)
    }

    return { id: response.id, username: response.username }
}

const logout = async () => {
    await makeApiRequest('api/auth/logout', {
        method: 'POST',
    })
    sessionStorage.removeItem('accessToken')
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

export default {
    register,
    login,
    logout,
    getAccessToken,
    refreshAccessToken,
    isLoggedIn,
}
