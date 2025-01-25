import InputField from "@/components/forms/inputField.js";
import { signIn } from "@/auth.js";

export default function SignUpPage() {
  const emailNote = "An email will be sent for verification. Click on the link in the email to complete the registration process.";
  return (
    <section className="darkMode">
      <h2 className="fancyText">Sign Up</h2>
      <form
        action={async (formData) => {
          "use server"
          await signIn("resend", formData)
        }}
      >
        <InputField labelText="Email" hint={emailNote} type="email" id="email" required />
        {/* <InputField labelText="Confirm Email" type="email" id="email2" required />
        <InputField labelText="Password" type="password" hint="Minimum 8 characters" id="password1" minLength="8" required />
        <InputField labelText="Confirm Password" type="password" id="password2" minLength="8" required />
        <InputField labelText="Screen Name" hint="Unique name upto 16 alphanumeric chars" pattern="^[a-zA-Z0-9_]*$" id="screenName" maxLength="16" required /> */}
        <p>
          <button type="submit" className="fancyButton">Create Account</button>
          <a href="/auth/login" className="lightText toRight">Have an Account?</a>
        </p>
        <p>* required field</p>
      </form>
    </section>
  )
}