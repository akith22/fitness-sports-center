import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToSection as smoothScroll } from '../utils/scroll';

const NAV_LINKS = [
  { label: 'Home',       id: 'home'       },
  { label: 'About',      id: 'about'      },
  { label: 'Services',   id: 'services'   },
  { label: 'Facilities', id: 'facilities' },
  { label: 'Membership', id: 'membership' },
  { label: 'Trainers',   id: 'trainers'   },
  { label: 'Contact',    id: 'contact'    },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    setIsMobileOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => smoothScroll(id), 150);
    } else {
      smoothScroll(id);
    }
  };

  return (
    <header className="fixed top-[0px] left-[0px] w-full z-50 bg-[#211d11]/90 backdrop-blur-md border-b border-[#d49e16]/20">
      <div className="flex items-center justify-between px-[24px] py-[14px] lg:px-[80px]">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-[12px] shrink-0">
          <img
            alt="Fitness Sports Center Logo"
            className="h-[32px] w-auto object-contain"
            src="/logo.jpg"
          />
          <h2 className="text-[#f1f5f9] text-[18px] leading-[28px] font-bold tracking-[-0.015em] hidden sm:block">
            Fitness Sports Center
          </h2>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-[28px]">
          <nav className="flex items-center gap-[28px]">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-[#b8b09a] hover:text-[#d49e16] text-[14px] leading-[20px] font-medium transition-colors duration-300 whitespace-nowrap"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* ── Profile Avatar ── */}
          <button
            className="w-[40px] h-[40px] rounded-full bg-[#2e2810] border border-[#d49e16]/30 flex items-center justify-center text-[#d49e16] hover:border-[#d49e16]/70 hover:bg-[#d49e16]/15 hover:scale-105 transition-all duration-300 shadow-md shadow-black/30 shrink-0"
            aria-label="Profile"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <div className="lg:hidden flex items-center">
          <button
            className="flex flex-col justify-center items-center w-[40px] h-[40px] gap-[5px]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-[22px] h-[2px] bg-[#f1f5f9] origin-center transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-[22px] h-[2px] bg-[#f1f5f9] transition-all duration-300 ${isMobileOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`block w-[22px] h-[2px] bg-[#f1f5f9] origin-center transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-[0px] opacity-0'}`}>
        <nav className="flex flex-col bg-[#1a1509]/95 border-t border-[#3d3623] px-[24px] pt-[8px] pb-[20px] gap-[2px]">
          {NAV_LINKS.map(({ label, id }, i) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`text-left text-[#b8b09a] hover:text-[#d49e16] text-[15px] font-medium py-[11px] transition-colors duration-200 ${i < NAV_LINKS.length - 1 ? 'border-b border-[#3d3623]/60' : ''}`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
