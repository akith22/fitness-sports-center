import { Link } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/contact', label: 'Contact' },
]

const Navbar: React.FC = () => {
  return (
    <header className="bg-slate-900 text-slate-100">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="text-lg font-semibold tracking-tight text-cyan-300">
          SmartGym
        </Link>
        <nav className="flex gap-3 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="rounded-md px-3 py-1.5 text-slate-200 hover:bg-cyan-500/20 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
