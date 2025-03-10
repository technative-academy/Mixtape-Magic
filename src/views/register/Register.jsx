const Register = () => {
    return (
        <div>
            <form>
                <label>
                    <p>Name</p>
                    <input type="name" placeholder="Name" required />
                </label>
                <label>
                    <p>Email</p>
                    <input type="email" placeholder="Email" required />
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" placeholder="Password" required />
                </label>
                <label>
                    <p>Bio</p>
                    <input type="bio" placeholder="Bio" required />
                </label>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Register
