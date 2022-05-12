import Banner from '../Banners/Banner'

export default function CtaJunoverse() {
  return (
    <section>
      <Banner
        header="Enter the Junoverse ✨"
        subheader="Join our secret society of crypto natives for early access and exclusive giveaways"
        buttonIcon="discord"
        buttonText="Join our Community"
      />
      <div className="flex flex-col items-center gap-10">
        <img
          src="https://cdn.onjuno.com/crypto-landing/junoverse-mobile.png"
          alt="Junoverse Image"
        />
      </div>
    </section>
  )
}
