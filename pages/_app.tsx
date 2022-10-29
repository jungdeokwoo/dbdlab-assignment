import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import theme from '../styles/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DBD랩 사전과제</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
