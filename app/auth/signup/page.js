export default function SignUpPage() {
  return (
    <section className="darkMode dropShadow fitToContent">
      <h2 className="fancyText dropShadow">Sign Up</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" size="30" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength="6" required />
        <div className="noteText">Minimum 8 characters</div>

        <label htmlFor="screenName">Screen Name</label>
        <input type="text" name="screenName" pattern="^[a-zA-Z0-9_]*$" maxLength="16" required />
        <div className="noteText">Upto 16 alphanumeric characters</div>

        <div>
          <button type="submit" className="fancyButton">Create Account</button>
        </div>
      </form>
    </section>
  )
}