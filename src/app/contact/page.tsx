'use client'; // Diperlukan karena menggunakan useState dan event handlers
import { useState } from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Pesan terkirim! (Hanya simulasi)');
    // Reset form setelah submit
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Hubungi Saya</h1>

      {/* Form Kontak */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Pesan</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Kirim Pesan
        </button>
      </form>

      {/* Link Sosial Media */}
      <div className="mt-10 text-center">
        <h2 className="text-lg font-semibold mb-3">Temukan Saya di:</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/rasyaakbar-dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
            <FaGithub className="text-2xl" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://instagram.com/arysa._23" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
            <FaInstagram className="text-2xl" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}