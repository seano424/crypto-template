import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import AsFeaturedIn from '@/components/Banners/AsFeaturedIn'
import HomeCtasWithLabels from '@/components/CTAs/HomeCtasWithLabels'
import Banner from '@/components/Banners/Banner'
import CtaGridWithImages from '@/components/CTAs/CtaGridWithImages'

const Home: NextPage = () => {
  return (
    <Layout title="Crypto Clone">
      <Hero />
      <AsFeaturedIn />
      <Banner header="The power of crypto, now in your checking account" />
      <HomeCtasWithLabels />
      <Banner
        header="10% back on crypto spends"
        subheader="Earn crypto-back on any 5 brands of your choice — be it shopping on Amazon or riding with Uber, you decide."
      />
      <CtaGridWithImages />
    </Layout>
  )
}

export default Home
