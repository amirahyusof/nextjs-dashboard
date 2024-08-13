// layout.tsx
import '@/ui/global.css';
import { ReactNode } from 'react';
import { ActionQueueProvider } from './context';
import { inter } from '@/ui/fonts';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ActionQueueProvider>
          {children}
        </ActionQueueProvider>
      </body>
    </html>
  );
}
