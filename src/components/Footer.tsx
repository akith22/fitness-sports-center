const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p>© {new Date().getFullYear()} SmartGym. Built with React, TypeScript, Tailwind.</p>
      </div>
    </footer>
  )
}

export default Footer
