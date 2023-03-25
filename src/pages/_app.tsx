import type { AppProps } from 'next/app'
import GlobalStyle from '@/src/theme/GlobalStyle'
import '@etchteam/next-pagination/dist/index.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
