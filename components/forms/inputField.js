"use client";

export default function InputField({ id, labelText, hint, ...props }) {
  if (!id) throw new Error("InputField: id parameter is required.");
  if (!props.name) props.name = id;
  if (props.required) labelText += "*";
  return (
    <p>
      <label className="fieldLabel" htmlFor={id}>{labelText}</label>
      <input className="inputField" id={id} {...props} />
      <span className="noteText">{hint}</span>
    </p>
  )
}