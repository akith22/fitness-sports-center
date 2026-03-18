const Contact: React.FC = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Contact</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Reach out for product feedback, support, or collaboration.</p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <p>Email: hello@smartgym.example</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
