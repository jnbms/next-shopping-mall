import type { AppProps } from 'next/app'
import Layout from './_layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>Nike Store</title>
  </Head>
  <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
