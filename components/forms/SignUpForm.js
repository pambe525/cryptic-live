"use client";

import { signUpUser } from "@/actions/auth";
import InputField from "@/components/forms/InputField.js";
import SubmitButton from "@/components/forms/SubmitButton.js";
import { useActionState } from "react";
import { registerUser } from "@/actions/auth.js";

export default function SignUpForm() {
  const emailNote = "An email will be sent for verification to this address.";
  const initialState = { email: "", password1: "", password2: "", screeName: "", error: "" };
  const [formState, formAction] = useActionState(registerUser, initialState);
  return (
    <form action={formAction}>
      <InputField labelText="Email" hint={emailNote} type="email" id="email"
        defaultValue={formState.email} required />
      <InputField labelText="Password" type="password" hint="Minimum 8 characters" id="password1"
        defaultValue={formState.password1} minLength="8" required />
      <InputField labelText="Confirm Password" type="password" id="password2"
        defaultValue={formState.password2} minLength="8" required />
      <InputField labelText="Screen Name" hint="Name upto 16 alphanumeric chars" id="screenName"
        defaultValue={formState.screenName} pattern="^[a-zA-Z0-9_]*$" maxLength="16" required />
      {formState?.error && <div className="red-alert-box">{formState.error}</div>}
      <p>
        <SubmitButton text="Sign Up" />
        <a href="/auth/login" className="lightText toRight">Have an Account?</a>
      </p>
      <p>* required field</p>
    </form>
  )
}