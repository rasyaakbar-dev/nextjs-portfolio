export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-1xl text-white py-2">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Rasya Akbar. All rights reserved.</p>
      </div>
    </footer>
  );
}