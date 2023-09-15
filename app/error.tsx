"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>Error 😭😭</h1>
      <p>An unexpected error occurred </p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
