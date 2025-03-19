import InputField from "@/components/forms/InputField.js";
import SubmitButton from "@/components/forms/SubmitButton.js";
import { signIn } from "@/auth.js";

export default function SignUpPage() {
  const emailNote = "An email will be sent for verification to this address.";
  const error = false;
  return (
    <section className="darkMode">
      <h2 className="fancyText">Sign Up</h2>
      <form
        action={async (formData) => {
          "use server"
          // await signIn("resend", formData)
        }}
      >
        <InputField labelText="Email" hint={emailNote} type="email" id="email" required />
        <InputField labelText="Password" type="password" hint="Minimum 8 characters" id="password1" minLength="8" required />
        <InputField labelText="Confirm Password" type="password" id="password2" minLength="8" required />
        <InputField labelText="Screen Name" hint="Unique name upto 16 alphanumeric chars" pattern="^[a-zA-Z0-9_]*$" id="screenName" maxLength="16" required />
        {error && <div class="red-alert-box">This is a test message</div>}
        <p>
          <SubmitButton text="Sign Up" />
          <a href="/auth/login" className="lightText toRight">Have an Account?</a>
        </p>
        <p>* required field</p>
      </form>
    </section>
  )
}