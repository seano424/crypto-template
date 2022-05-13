import Image from 'next/image'
import Banner from '../Banners/Banner'

export default function CtaJoinCommunity() {
  return (
    <section>
      <Banner
        header="Enter the Junoverse ✨"
        subheader="Join our secret society of crypto natives for early access and exclusive giveaways"
        buttonIcon="discord"
        buttonText="Join our Community"
      />
      <div className="flex flex-col items-center gap-10">
        <Image
          src="https://cdn.onjuno.com/crypto-landing/junoverse-mobile.png"
          alt="Junoverse Image"
          height={400}
          width={400}
        />
      </div>
    </section>
  )
}
