'use client'

import { loginUser } from "@/actions/auth.js";
import { useRef, useActionState } from 'react';

export default function LoginPage() {
  // const initialState = { error: "" };
  // const [state, formAction] = useActionState(loginUser, initialState);
  // const emailField = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await loginUser(event);
    const emailField = event.target.email;
    if (result.error && emailField.validity.valid) {
      emailField.setCustomValidity(result.error);
      emailField.reportValidity();
    }
  }

  return (
    <section className="darkMode fitToContent">
      <h2 className="fancyText">Login</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" size="30" required />
        </p>

        <p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </p>

        <p></p>

        <p>
          <button type="submit" className="fancyButton">Login</button>
          <a href="/auth/signup" className="lightText toRight">New User?</a>
        </p>
      </form>
    </section>
  )
}