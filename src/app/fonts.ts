import {
  Instrument_Serif,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Vazirmatn,
  Noto_Kufi_Arabic,
} from 'next/font/google';

export const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const vazirmatn = Vazirmatn({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-persian',
  display: 'swap',
});

export const notoKufiArabic = Noto_Kufi_Arabic({
  weight: ['500', '700'],
  subsets: ['arabic'],
  variable: '--font-arabic-display',
  display: 'swap',
});
