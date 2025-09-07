import '../app/globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Website portfolio pribadi',
  icons: {
    icon: '/icons.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-w-screen min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-2 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}