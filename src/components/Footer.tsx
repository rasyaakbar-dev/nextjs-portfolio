export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Budi Santoso. All rights reserved.</p>
      </div>
    </footer>
  );
}