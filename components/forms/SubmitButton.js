"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ labelText, ...props }) {
  const { pending } = useFormStatus();
  if (pending) props.disabled = true;
  return (
    <button {...props} type="submit" className="fancyButton">
      {pending ? "Working..." : labelText}
    </button>
  )
}