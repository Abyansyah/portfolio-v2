import { Poppins } from 'next/font/google';

export const PoppinsFont = Poppins({
  variable: '--Poppins-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['400', '500', '600', '700', '800']
});
