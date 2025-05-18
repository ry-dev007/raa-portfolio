import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider/ThemeProvider';

import clsx from 'clsx';
import Header from '@/components/Header';

import './globals.css';

const montSerrat = Montserrat({
  variable: '--font-mont-serrat',
  subsets: ['latin']
});

export const metadata = {
  title: 'Rahul Yadav - Software Developer',
  description: 'To be updated'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={clsx(montSerrat.variable, 'antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
