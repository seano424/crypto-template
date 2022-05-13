import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import AsFeaturedIn from '@/components/Banners/AsFeaturedIn'
import CtaCardsWithLabelLarge from '@/components/CTAs/CtaCardsWithLabelLarge'
import CtaGridWithImages from '@/components/CTAs/CtaGridWithImages'
import CtaMasonryGrid from '@/components/CTAs/CtaMasonryGrid'
import CtaCustomerCard from '@/components/CTAs/CtaCustomerCard'
import CtaJoinCommunity from '@/components/CTAs/CtaJoinCommunity'
import CtaNumbers from '@/components/CTAs/CtaNumbers'
import CtaCreateAccountSmall from '@/components/CTAs/CtaCreateAccountSmall'
import CtaCreateAccountLarge from '@/components/CTAs/CtaCreateAccountLarge'

const Home: NextPage = () => {
  return (
    <Layout title="OnJuno Clone">
      <main className="max-w-[1440px] mx-auto">
        <Hero />
        <AsFeaturedIn />
        <CtaCardsWithLabelLarge />
        <CtaGridWithImages />
        <CtaMasonryGrid />
        <CtaCustomerCard />
        <CtaJoinCommunity />
      </main>
      <CtaNumbers />
      <CtaCreateAccountSmall />
      <CtaCreateAccountLarge />
    </Layout>
  )
}

export default Home
