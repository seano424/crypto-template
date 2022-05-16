import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LayoutGroup } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutGroup>
      <Component {...pageProps} />
    </LayoutGroup>
  )
}

export default MyApp
