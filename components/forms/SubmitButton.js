"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ text, ...props }) {
  const { pending } = useFormStatus();
  return (
    <button {...props} disabled={pending} type="submit" className="fancyButton">
      {pending ? "Working..." : text}
    </button>
  )
}