export default function LoginPage() {
  return (
    <section className="darkMode dropShadow fitToContent">
      <h2 className="fancyText">Login</h2>
      <form>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" size="30" required />
        </p>

        <p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </p>

        <p>
          <button type="submit" className="fancyButton">Login</button>
          <a href="/auth/signup" className="lightText toRight">New User?</a>
        </p>
      </form>
    </section>
  )
}