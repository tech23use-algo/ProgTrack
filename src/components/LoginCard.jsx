function LoginCard() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand" aria-label="ProgTrack brand">
          <span className="brand-mark">PT</span>
          <span>ProgTrack</span>
        </div>

        <div className="login-header">
          <h2>Welcome back</h2>
          <p>Sign in to continue tracking your tasks.</p>
        </div>

        <form className="login-form">
          <label className="login-field">
            <span>Email</span>
            <input type="email" placeholder="user@example.com" />
          </label>

          <label className="login-field">
            <span>Password</span>
            <input type="password" placeholder="Enter your password" />
          </label>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">Log in</button>
        </form>

        <p className="login-footer">
          Don’t have an account? <a href="#">Create one</a>
        </p>
      </div>
    </div>
  )
}

export default LoginCard
