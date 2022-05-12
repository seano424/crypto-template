import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import AsFeaturedIn from '@/components/Banners/AsFeaturedIn'
import HomeCtasWithLabels from '@/components/CTAs/HomeCtasWithLabels'
import CtaGridWithImages from '@/components/CTAs/CtaGridWithImages'
import CtaGridWithMasonry from '@/components/CTAs/CtaGridWithMasonry'
import CtaCustomers from '@/components/CTAs/CtaCustomers'
import CtaJunoverse from '@/components/CTAs/CtaJunoverse'
import CtaNumbers from '@/components/CTAs/CtaNumbers'
import CtaSmallCreateCheckingAccount from '@/components/CTAs/CtaSmallCreateCheckingAccount'
import CtaLargeCreateCheckingAccount from '@/components/CTAs/CtaLargeCreateCheckingAccount'

const Home: NextPage = () => {
  return (
    <Layout title="Crypto Clone">
      <main className="max-w-[1440px] mx-auto">
        <Hero />
        <AsFeaturedIn />
        <HomeCtasWithLabels />
        <CtaGridWithImages />
        <CtaGridWithMasonry />
        <CtaCustomers />
        <CtaJunoverse />
      </main>
      <CtaNumbers />
      <CtaSmallCreateCheckingAccount />
      <CtaLargeCreateCheckingAccount />
    </Layout>
  )
}

export default Home
