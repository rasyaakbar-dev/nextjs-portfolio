'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral-800 py-3">
      <div className="m-1 px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 sm:text-2xl hover:text-white transition-colors">
          Portfolio
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        {/* Navigation links */}
        <ul
          className={`flex-col sm:flex-row sm:flex space-y-2 sm:space-y-0 space-x-0 sm:space-x-5 text-white hover:text-neutral-200 transition-colors absolute sm:static bg-neutral-800 sm:bg-transparent left-0 right-0 top-16 sm:top-auto px-4 sm:px-0 py-4 sm:py-0 ${
            menuOpen ? 'flex' : 'hidden sm:flex'
          }`}
        >
          <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
          <li><Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link></li>
          <li><Link href="/skills" className="hover:text-blue-500 transition-colors">Skills</Link></li>
          <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}