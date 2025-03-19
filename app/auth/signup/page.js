import { signIn } from "@/auth.js";
import SignUpForm from "@/components/forms/SignUpForm";

export default function SignUpPage() {
  return (
    <section className="darkMode">
      <h2 className="fancyText">Sign Up</h2>
      <SignUpForm />
    </section>
  )
}