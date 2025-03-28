import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
// import ChatBotWidget from '../components/ChatBotWidget';
import FloatingDemo from '../components/FloatingDemo';

export const metadata = {
  title: 'PrimePoint',
  description: 'Learn coding with our professional courses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {/* Fixed Navbar is rendered on every page */}
        <Navbar />
        {/* Main content (pages) */}
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <FloatingDemo/>
        {/* <ChatBotWidget /> */}
      </body>
    </html>
  );
}
