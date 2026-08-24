import '../auth.form.scss';
import {Link} from "react-router";
export default function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <div className="form-container">
                <h1>
                    Login
                </h1>
            <form action="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email or Username</label>
                    <input type="text" name="userid" id="email" placeholder="Enter your email or username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <button className="button primary-button" type="submit">Login</button>
                <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            </form>
            </div>
        </main>
    )
}