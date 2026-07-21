import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6">
      <div className="text-center">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Error 404
        </span>

        <h1 className="mt-8 text-7xl font-black text-white md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-400"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}