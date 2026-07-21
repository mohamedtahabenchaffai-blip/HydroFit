export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816]">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />

        <h2 className="mt-8 text-2xl font-bold tracking-[0.25em] text-white">
          HYDRO
          <span className="text-cyan-400">FIT</span>
        </h2>

        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
          Loading Experience...
        </p>
      </div>
    </main>
  );
}