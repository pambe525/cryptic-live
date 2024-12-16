export default function SignUpPage() {
  return (
    <section className="darkMode dropShadow fitToContent">
      <h2 className="fancyText">Sign Up</h2>
      <form>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" size="30" required />
        </p>

        <p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" minLength="6" required />
          <span className="noteText">Minimum 8 characters</span>
        </p>

        <p>
          <label htmlFor="screenName">Screen Name</label>
          <input type="text" name="screenName" pattern="^[a-zA-Z0-9_]*$" maxLength="16" required />
          <span className="noteText">Must be unique upto 16 alphanumeric chars</span>
        </p>

        <p className="vCentered">
          <button type="submit" className="fancyButton">Create Account</button>
          <a href="/auth/login" className="lightText toRight">Have an Account?</a>
        </p>
      </form>
    </section>
  )
}