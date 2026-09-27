function RegisterForm({ onRegister, onLogin }) {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand" aria-label="ProgTrack brand">
          <span className="brand-mark">PT</span>
          <span>ProgTrack</span>
        </div>

        <div className="login-header">
          <h2>Create your account</h2>
          <p>Start tracking your progress with ProgTrack.</p>
        </div>

        <form
          className="login-form register-form"
          onSubmit={(event) => {
            event.preventDefault()
            onRegister()
          }}
        >
          <label className="login-field">
            <span>Full name</span>
            <input type="text" name="fullName" placeholder="User" />
          </label>

          <label className="login-field">
            <span>Email</span>
            <input type="email" name="email" placeholder="user@example.com" />
          </label>

          <label className="login-field">
            <span>Password</span>
            <input type="password" name="password" placeholder="Enter your password" />
          </label>

          <label className="login-field">
            <span>Confirm password</span>
            <input type="password" name="confirmPassword" placeholder="Re-enter your password" />
          </label>

          <button type="submit" className="login-button">Create account</button>
        </form>

        <p className="login-footer">
          Already have an account?{' '}
          <button type="button" className="login-footer-link" onClick={onLogin}>Login</button>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm
