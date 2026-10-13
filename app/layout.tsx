import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vision Estates - Porto Belo',
  description: 'Curadoria de imóveis de alto padrão em Porto Belo e região. Inteligência imobiliária e valor a longo prazo.',
  icons: {
    icon: 'https://storage.googleapis.com/antigravity-artifacts/6ba34eed-2ccc-4e31-9df2-14481fdc4273/input_file_0.png',
    shortcut: 'https://storage.googleapis.com/antigravity-artifacts/6ba34eed-2ccc-4e31-9df2-14481fdc4273/input_file_0.png',
    apple: 'https://storage.googleapis.com/antigravity-artifacts/6ba34eed-2ccc-4e31-9df2-14481fdc4273/input_file_0.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebas.variable}`}>
      <body suppressHydrationWarning className="bg-navy text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
