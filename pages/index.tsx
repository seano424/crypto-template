import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import { hero, cashout, getPaid } from 'constants/ctaDetails'
import SmallCta from '@/components/SmallCta'

const Home: NextPage = () => {
  return (
    <Layout title="Crypto Clone">
      <Hero details={hero} />
      {/* <section>
        <p className="uppercase text-center text-gray-300 tracking-widest md:text-xl pt-4">
          As featured in
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-4 w-full px-10 pt-4 pb-20">
          <img
            className="flex justify-center w-auto h-10 object-contain"
            height={40}
            width={138}
            alt="Fortune"
            loading="lazy"
            src="/images/businesses/fortune.png"
          />
          <img
            className="flex justify-center w-auto h-10 object-contain"
            height={40}
            width={138}
            src="/images/businesses/banker.png"
            alt="American Banker"
            loading="lazy"
          />
          <img
            className="flex justify-center w-auto h-10 object-contain"
            height={40}
            width={138}
            src="/images/businesses/techcrunch.png"
            alt="American techcrunch"
            loading="lazy"
          />
          <img
            className="flex justify-center w-auto h-10 object-contain"
            height={40}
            width={138}
            src="/images/businesses/coindesk.png"
            alt="American coindesk"
            loading="lazy"
          />
          <img
            className="flex justify-center w-full h-10 object-contain col-span-2 md:col-span-1"
            height={40}
            width={138}
            src="/images/businesses/forbes.png"
            alt="Forbes"
            loading="lazy"
          />
        </div>
      </section>
      <section>
        <p className='px-10 pb-10 text-center tracking-wide text-2xl font-bold'>The power of crypto, now in your checking account</p>
      </section>
      <SmallCta />
      <HeroCta details={cashout} />
      <HeroCta details={getPaid} /> */}
    </Layout>
  )
}

export default Home
