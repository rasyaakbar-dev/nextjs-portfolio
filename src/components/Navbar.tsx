'use client'; // Diperlukan karena menggunakan Link
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-neutral-800 shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Portfolio
        </Link>
        <ul className="flex space-x-6 text-white">
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