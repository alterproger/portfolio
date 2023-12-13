import '@/assets/styles/globals.scss';
import { Footer, Header, ScrollToTop } from '@/components/components';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: 'John Smith Portfolio',
  description: 'John Smith portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
