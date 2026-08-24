import '../auth.form.scss';
import {Link} from "react-router";
export default function Register() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <div className="form-container">
                <h1>
                    Register
                </h1>
            <form action="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email or username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Username</label>
                    <input type="text" name="username" id="usernname" placeholder="Enter your email or username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <button className="button primary-button" type="submit">Register</button>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </form>
            </div>
        </main>
    )
}