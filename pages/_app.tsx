import 'ahmad/common/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import { PoppinsFont } from 'ahmad/common/styles/fonts';

const ProgresBar = dynamic(() => import('ahmad/common/components/ProgressBar/progresBar'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            --Poppins-font: ${PoppinsFont.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <ProgresBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
