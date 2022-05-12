import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
interface Props {
  children: ReactNode
  title: string
}

const Layout = ({ children, title = 'Example' }: Props) => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>{title}</title>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💙</text></svg>"
          />
        </Head>

        <Navbar sitename="ONJUNO" />
        <main className="flex-1 w-full h-full">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
