import InputField from "@/components/forms/inputField.js";

export default function SignUpPage() {
  return (
    <section className="darkMode fitToContent">
      <h2 className="fancyText">Sign Up</h2>
      <form>
        <InputField labelText="Email" hint="Enter your active email for important updates!" type="email" id="email1" required />
        <InputField labelText="Confirm Email" type="email" id="email2" required />
        <InputField labelText="Password" hint="Minimum 8 characters" id="password1" minLength="8" required />
        <InputField labelText="Confirm Password" id="password2" minLength="8" required />
        <InputField labelText="Screen Name" hint="Unique name upto 16 alphanumeric chars" pattern="^[a-zA-Z0-9_]*$" id="screenName" maxLength="16" required />
        <p>
          <button type="submit" className="fancyButton">Create Account</button>
          <a href="/auth/login" className="lightText toRight">Have an Account?</a>
        </p>
        <p>* required field</p>
      </form>
    </section>
  )
}