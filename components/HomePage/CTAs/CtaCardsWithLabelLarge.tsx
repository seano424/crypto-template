import Banner from '../../Banners/Banner'
import CtaCardWithLabel from './CtaCardWithLabel'

export default function CtaCardsWithLabelLarge() {
  return (
    <section>
      <Banner header="The power of crypto, now in your checking account" />
      <div className="max-w-7xl mx-auto px-8">
        <CtaCardWithLabel size="lg" />
        <div className="flex flex-col gap-8 mt-8 md:flex-row">
          <CtaCardWithLabel size="sm" />
          <CtaCardWithLabel size="sm" />
        </div>
      </div>
    </section>
  )
}
