import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prajit Giri | Finance, Compliance & Analytics',
  description: 'Portfolio of Prajit Giri, an EY finance and compliance professional working across tax, analytics, and public service.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
