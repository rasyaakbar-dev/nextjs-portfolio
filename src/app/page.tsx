import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center">
      {/* Foto Profil */}
      <div className="mb-6 flex justify-center">
        <div className="aspect-square w-45 overflow-hidden rounded-full border-4 border-blue-500 bg-[#1e293b] flex items-center justify-center">
          <Image
            src="/portrait.jpg"
            alt="Foto Profil"
            width={150}
            height={150}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-2">Rasya A.N.</h1>
      <p className="text-xl sm:text-2xl text-gray-400 mb-6">App & Web Developer</p>

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