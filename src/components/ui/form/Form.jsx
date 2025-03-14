import styles from './form.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Form(props) {
    let { type, onSubmit, isLoading, error } = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ username, password, email })
    }

    return (
        <>
            {type == 'Login' ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <legend className={styles.form__legend}>Log in</legend>

                    <p className={styles.form__cta}>to continue to Mixtape</p>

                    <div className={styles.form__group}>
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.form__group}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" disabled={isLoading ? true : false}>
                        Log in
                    </button>

                    {error ? <p>Error: {error}</p> : null}

                    <small>
                        New to Mixtape Magic?{' '}
                        <Link to="/register">Create account</Link>
                    </small>
                </form>
            ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <legend className={styles.form__legend}>Sign up</legend>

                    <p className={styles.form__cta}>
                        to create your Magic Mixtape account
                    </p>

                    <div className={styles.form__group}>
                        <label htmlFor="username">Username</label>
                        <input
                            name="username"
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={styles.form__group}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.form__group}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" disabled={isLoading ? true : false}>
                        Create account
                    </button>

                    {error ? <p>Error: {error}</p> : null}

                    <small>
                        Already have an account? <Link to="/login">log in</Link>
                    </small>
                </form>
            )}
        </>
    )
}

export default Form
