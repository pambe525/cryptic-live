"use client";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function InputField({ id, labelText, hint, ...props }) {
  if (!id) throw new Error("InputField: id parameter is required.");
  if (!props.name) props.name = id;
  if (props.required) labelText += "*";
  const isPassword = (props.type == "password");
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <p>
      <label className="fieldLabel" htmlFor={id}>{labelText}</label>
      {isPassword &&
        <a role="link" className="toRight"
          onClick={togglePassword}
          title={showPassword ? "Hide" : "Show"}>
          {showPassword ? <FaEyeSlash data-testid="fa-eye-slash" /> : <FaEye data-testid="fa-eye" />}
        </a>
      }
      <input className="inputField" id={id} {...props}
        type={isPassword ? (showPassword ? "text" : "password") : props.type} />
      <span className="noteText">{hint}</span>
    </p>
  )
}