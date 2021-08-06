import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/global.css';
import '@fontsource/inter';

import { setup } from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        width: `100%`,
        overflow: `hidden`,
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
