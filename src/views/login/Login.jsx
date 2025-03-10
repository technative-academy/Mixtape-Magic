const Login = () => {
    return (
        <div>
            <form>
                <label>
                    <p>Email</p>
                    <input type="email" placeholder="Email" required />
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" placeholder="Password" required />
                </label>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
