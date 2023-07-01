import type { ReactNode } from 'react';

import { Manrope } from 'next/font/google';

import Header from '@app/modules/shared/components/Header';
import cn from '@app/modules/utils/cn';

import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-black text-neutral-100">
      <body className={cn(manrope.className, 'mx-auto max-w-screen-lg p-4 md:p-6')}>
        <Header />
        {children}
      </body>
    </html>
  );
}
