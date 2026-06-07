import type { Metadata } from 'next';
import './globals.css';
import {
  instrumentSerif,
  ibmPlexSans,
  ibmPlexMono,
  vazirmatn,
  notoKufiArabic,
} from './fonts';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { NumeralProvider } from '@/providers/NumeralProvider';
import { NavBar } from '@/components/layout/NavBar';
import { PageShell } from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'Ḥurūf — حروف | Abjad Numerology Explorer',
  description:
    'Explore the esoteric science of letters. Type a name or word and see its abjad value, letter by letter — number, planet, element, essence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="paper"
      className={[
        instrumentSerif.variable,
        ibmPlexSans.variable,
        ibmPlexMono.variable,
        vazirmatn.variable,
        notoKufiArabic.variable,
      ].join(' ')}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('huruf-theme');if(t&&['paper','night','sepia'].includes(t)){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider>
          <NumeralProvider>
            <NavBar />
            <PageShell>{children}</PageShell>
          </NumeralProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
