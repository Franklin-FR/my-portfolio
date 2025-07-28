import React, { useState } from 'react';
import github from '../assets/github.svg';
import linkedIn from '../assets/linkedIn.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((p) => !p);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#e7e7e7] shadow-md px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Name */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="bg-black text-white text-sm font-bold px-3 py-2 rounded-lg">
            F O
          </div>
          <p className="text-xl font-bold font-sans hover:text-black transition-colors duration-300">
            Franklyn Omoregie
          </p>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-bold text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="cursor-pointer hover:text-gray-600 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex gap-4 items-center">
          <a href="https://github.com/Franklin-FR" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" className="w-5 h-5 cursor-pointer hover:opacity-70" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram" className="w-5 h-5 cursor-pointer hover:opacity-70" />
          </a>
          <a href="https://www.linkedin.com/in/franklin-omoregie-57920628a/" target="_blank" rel="noreferrer">
            <img src={linkedIn} alt="LinkedIn" className="w-5 h-5 cursor-pointer hover:opacity-70" />
          </a>
          <a href="https://x.com/madibafranklin?s=21" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter" className="w-5 h-5 cursor-pointer hover:opacity-70" />
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#e7e7e7] px-6 pt-4 pb-6 space-y-4"
        >
          <ul className="flex flex-col gap-4 font-bold text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={closeMenu}
                  className="block w-full py-2 hover:text-gray-600 transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-6">
            <a href="https://github.com/Franklin-FR" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub" className="w-5 h-5 cursor-pointer hover:opacity-70" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" className="w-5 h-5 cursor-pointer hover:opacity-70" />
            </a>
            <a href="https://www.linkedin.com/in/franklin-omoregie-57920628a/" target="_blank" rel="noreferrer">
              <img src={linkedIn} alt="LinkedIn" className="w-5 h-5 cursor-pointer hover:opacity-70" />
            </a>
            <a href="https://x.com/madibafranklin?s=21" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter" className="w-5 h-5 cursor-pointer hover:opacity-70" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


