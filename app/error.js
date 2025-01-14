"use client"

export default function ErrorBoundary({ error }) {
  return (
    <div>
      <h2>An internal error occurred</h2>
      <p>{error.message}</p>
    </div>
  )
}