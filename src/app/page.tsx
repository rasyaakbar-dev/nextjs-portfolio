import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center">
      {/* Foto Profil */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/profile.jpg" // Pastikan file ada di /public
          alt="Foto Profil"
          width={150}
          height={150}
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Nama dan Tagline */}
      <h1 className="text-3xl font-bold mb-2">Budi Santoso</h1>
      <p className="text-xl text-gray-600 mb-6">Web Developer | UI/UX Enthusiast</p>

      {/* Tombol Navigasi */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">
          Tentang Saya
        </Link>
        <Link href="/projects" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">
          Lihat Project
        </Link>
      </div>
    </div>
  );
}