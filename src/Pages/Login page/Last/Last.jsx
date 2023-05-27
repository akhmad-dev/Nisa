import React from 'react'

const Last = () => {
  return (
    <div className="Last">
      <form action="">
        <div class="Last_Nav">SIGN UP</div>
        <div className="Login_mag">
          <h3>
            Join Community</h3>

          <h4>    <span>  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_459_1718)">
              <path d="M16.9944 9.16863C16.9944 8.43117 16.9366 7.89303 16.8114 7.33496H8.67188V10.6634H13.4496C13.3533 11.4906 12.8332 12.7363 11.6772 13.5734L11.661 13.6848L14.2346 15.7475L14.4129 15.7659C16.0504 14.2013 16.9944 11.8992 16.9944 9.16863" fill="#4285F4" />
              <path d="M8.6665 17.9384C11.0072 17.9384 12.9722 17.1411 14.4075 15.7659L11.6719 13.5734C10.9398 14.1015 9.95724 14.4703 8.6665 14.4703C6.37396 14.4703 4.42819 12.9057 3.73458 10.7432L3.63291 10.7521L0.956871 12.8947L0.921875 12.9954C2.34748 15.9252 5.2758 17.9384 8.6665 17.9384Z" fill="#34A853" />
              <path d="M3.73741 10.7431C3.55439 10.185 3.44848 9.58704 3.44848 8.9692C3.44848 8.35129 3.5544 7.75338 3.72778 7.19531L3.72293 7.07645L1.01336 4.89941L0.924707 4.94304C0.337145 6.15886 0 7.52419 0 8.9692C0 10.4142 0.337145 11.7795 0.924707 12.9953L3.73741 10.7431" fill="#FBBC05" />
              <path d="M8.6665 3.46802C10.2944 3.46802 11.3925 4.19551 12.0186 4.80346L14.4653 2.33196C12.9627 0.886947 11.0072 0 8.6665 0C5.2758 0 2.34748 2.01305 0.921875 4.94292L3.72495 7.19519C4.42819 5.03265 6.37396 3.46802 8.6665 3.46802" fill="#EB4335" />
            </g>
            <defs>
              <clipPath id="clip0_459_1718">
                <rect width="17" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg></span>
           Sign up with Google</h4>
        <p> or Sign up with email</p>
        </div>
        <div className="Login_label">
          <label for="email">Email address</label>
          <input type="text" name="address" id="address" placeholder="Email"></input>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password"></input>
        </div>
        <h2>Forgot Password?</h2>
        <button>Register</button>
        <h3>Already have an account?  <span>Sign Up</span> </h3>
      </form>
    </div>
  )
}

export default Last