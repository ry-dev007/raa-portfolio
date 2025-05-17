import { Montserrat } from 'next/font/google';

import './globals.css';
import clsx from 'clsx';

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
    <html lang="en">
      <body className={clsx(montSerrat.variable, 'antialiased')}>{children}</body>
    </html>
  );
}
