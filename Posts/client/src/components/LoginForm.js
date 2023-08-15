import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        await store.login();

        navigate('/')
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div class="form-group 30">
                    <label for="email">Email address</label>
                    <input
                        onChange={store.updateLoginForm}
                        value={store.loginForm.email}
                        type="email"
                        name="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                        onChange={store.updateLoginForm}
                        value={store.loginForm.password}
                        type="password"
                        name="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit" class="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
}
