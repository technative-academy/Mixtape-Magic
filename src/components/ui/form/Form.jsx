import styles from './form.module.css'
import { NavLink } from 'react-router-dom'

function Form(props) {
    let { type } = props
    console.log(type)

    return (
        <>
            {type == 'Login' ? (
                <form className={styles.form}>
                    <legend className={styles.form__legend}>Log in</legend>

                    <p className={styles.form__cta}>to continue to Mixtape</p>

                    <div className={styles.form__group}>
                        <label for="name">Username</label>
                        <input name="name" type="text" required />
                    </div>

                    <div className={styles.form__group}>
                        <label for="password">Password</label>
                        <input type="password" required />
                    </div>

                    <button type="submit">Log in</button>

                    <small>
                        New to Mixtape Magic?{' '}
                        <NavLink to="/register">Create account</NavLink>
                    </small>
                </form>
            ) : (
                <form className={styles.form}>
                    <legend className={styles.form__legend}>Sign up</legend>

                    <p className={styles.form__cta}>
                        to create your Magic Mixtape account
                    </p>

                    <div className={styles.form__group}>
                        <label for="name">Username</label>
                        <input name="name" type="text" required />
                    </div>
                    <div className={styles.form__group}>
                        <label for="email">Email</label>
                        <input type="email" required />
                    </div>

                    <div className={styles.form__group}>
                        <label for="password">Password</label>
                        <input type="password" required />
                    </div>
                    <div className={styles.form__group}>
                        <label for="bio">Bio</label>
                        <textarea type="bio" required />
                    </div>
                    <button type="submit">Create account</button>
                    <small>
                        Already have an account?{' '}
                        <NavLink to="/login">log in</NavLink>
                    </small>
                </form>
            )}
        </>
    )
}

export default Form
