import '../auth.form.scss';
export default function Login() {
    return (
        <main>
            <div className="form-container">
                <h1>
                    Login
                </h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="email">Email or Username</label>
                    <input type="text" name="userid" id="email" placeholder="Enter your email or username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <button className="button primary-button" type="submit">Login</button>
            </form>
            </div>
        </main>
    )
}