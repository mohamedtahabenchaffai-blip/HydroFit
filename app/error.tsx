"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6">
      <div className="max-w-xl text-center">
        <span className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-red-400">
          Unexpected Error
        </span>

        <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
          Something went wrong
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          An unexpected error occurred while loading this page.
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-10 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}