import {
  Instrument_Serif,
  Playfair_Display,
  Vazirmatn,
  Noto_Kufi_Arabic,
  JetBrains_Mono,
} from 'next/font/google';

export const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const vazirmatn = Vazirmatn({
  weight: ['300', '400', '500'],
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
});

export const notoKufiArabic = Noto_Kufi_Arabic({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-arabic-display',
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
