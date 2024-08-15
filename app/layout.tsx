// layout.tsx
import '@/ui/global.css';
import { ReactNode } from 'react';
import { inter } from '@/ui/fonts';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
