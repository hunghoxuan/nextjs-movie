'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import Link from 'next/link'  
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error])
 
  return (
    <div className="container pb-12 animate-fade-in">
        <div className="my-20 flex flex-col items-center justify-center text-center">
          <img src="/404.svg" alt="404" />
          <h1 className="text-5xl font-bold mt-10">Lost your way?</h1>
          <p className="mt-4 text-white-50">
            Oops! This is awkward. You are looking for something that
            doesn&apos;t actually exist.
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
            Try again
          </button>
          </p>
          <Link href="/" className="button button-primary mt-6">
            Go home
          </Link>
        </div>
      </div>
  )
}