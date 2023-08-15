import authStore from "../stores/authStore"
import { useNavigate } from "react-router-dom";

export default function SignupForm() {

    const store = authStore();
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        await store.signup();
        navigate('/')
    }


    return (
        <div className="login">
            <h1>Create Account</h1>
            <form onSubmit={handleSignup}>
                <div class="form-group 30">
                    <label for="email">Email address</label>
                    <input
                        onChange={store.updateSignupForm}
                        value={store.signupForm.email}
                        type="email"
                        name="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                        onChange={store.updateSignupForm}
                        value={store.signupForm.password}
                        type="password"
                        name="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" class="btn btn-primary">
                    Sign Up
                </button>
            </form>
        </div>
    )
}
