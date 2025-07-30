import './globals.css';
import Header from './components/Navigation';
import Footer from './components/Footer';

export const metadata = {
  title: 'Marla Tumenjargal',
  description: 'Example',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative">
        {/* Full-height vertical line */}
        <div className="fixed top-0 bottom-0 left-[calc(5vw+theme(spacing.1)+var(--nav-width,150px))] w-px bg-gray-300 z-10" />
        
        {/* Main area: nav + page content side by side */}
        <div className="flex flex-grow min-h-0">
          {/* Left: Navigation container */}
          <div className="flex flex-col h-full pt-16 pl-[5vw] pr-10">
            <Header />
          </div>

          {/* Right: Page content */}
          <main className="flex-1 max-w-3xl px-6 py-24">{children}</main>
        </div>

        {/* Footer */}
        <div className="pt-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}