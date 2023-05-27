import React from 'react'

const Login = () => {
    return (
        <div className="Login">
            <form action="">
                <div class="Login_Nav">LOGIN</div>
                <div className="Login_mag">
                    Login to your account
                </div>
                <div className="Login_label">
                    <label for="email">Email address</label>
                    <input type="text" name="address" id="address" placeholder="Email"></input>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password"></input>
                </div>
                <h2>Forgot Password?</h2>
                <button>Login</button>
                <h3>Need an account?  <span>Sign Up</span> </h3>
            </form>

        </div>
    )
}

export default Login