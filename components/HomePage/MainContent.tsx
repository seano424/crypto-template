import Hero from './Hero'
import CtaCardsWithLabelLarge from './CTAs/CtaCardsWithLabelLarge'
import AsFeaturedIn from '../Banners/AsFeaturedIn'
import CtaCustomerCard from './CTAs/CtaCustomerCard'
import CtaJoinCommunity from './CTAs/CtaJoinCommunity'
import CtaMasonryGrid from './CTAs/CtaMasonryGrid'
import CtaGridWithImages from './CTAs/CtaGridWithImages'

export default function MainContent() {
  return (
    <div className="max-w-[1440px] mx-auto select-none">
      <Hero />
      <AsFeaturedIn />
      <CtaCardsWithLabelLarge />
      <CtaGridWithImages />
      <CtaMasonryGrid />
      <CtaCustomerCard />
      <CtaJoinCommunity />
    </div>
  )
}
