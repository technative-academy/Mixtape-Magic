import authService from './authService'

const API_URL = import.meta.env.VITE_API_URL

const makeApiRequest = async (url, options = {}) => {
    options.headers = options.headers || {}
    // Include credentials for cross-origin requests
    options.credentials = 'include'
    options.headers['Content-Type'] = 'application/json'

    let accessToken = authService.getAccessToken()
    if (accessToken) {
        options.headers['Authorization'] = `Bearer ${accessToken}`
    }

    try {
        let response = await fetch(`${API_URL}/${url}`, options)

        if (
            accessToken &&
            (response.status === 401 || response.status === 403)
        ) {
            // Attempt to refresh the access token and re-request
            try {
                accessToken = await authService.refreshAccessToken()
                if (accessToken) {
                    options.headers['Authorization'] = `Bearer ${accessToken}`
                    response = await fetch(`${API_URL}/${url}`, options)
                } else {
                    throw new Error('Unauthorized')
                }
            } catch (error) {
                await authService.logout()
                console.error(error)
                throw new Error('Unauthorized')
            }
        }

        if (response.status >= 400) {
            const data = await response.json()
            throw new Error(data.error || 'Fetch failed')
        }

        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

export default makeApiRequest
