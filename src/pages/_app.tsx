import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançadop - Boilerplate</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch icon" href="/images/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Um projeto simples para estudos" />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
