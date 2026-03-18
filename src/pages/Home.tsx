const Home: React.FC = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-500">SmartGym starter</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Build a responsive React + Tailwind app</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          This starter includes routing, a base layout, and Tailwind styles for fast UI development.
        </p>
      </div>
    </section>
  )
}

export default Home
