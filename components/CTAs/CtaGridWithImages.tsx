const ctas = [
  {
    text: 'No annual fees, No foreign transaction fees',
    image:
      'https://cdn.onjuno.com/crypto-landing/crypto-spends-logo-1-1%402x.png',
  },
  {
    text: 'Spend Crypto or Cash anywhere Mastercard is accepted',
    image:
      'https://cdn.onjuno.com/crypto-landing/crypto-spends-logo-2-1%402x.png',
  },
  {
    text: "Protected with Mastercard's zero liability policy",
    image:
      'https://cdn.onjuno.com/crypto-landing/crypto-spends-logo-3-1%402x.png',
  },
]

export default function CtaGridWithImages() {
  return (
    <section>
      <div className="grid gap-8 md:gap-0 md:grid-cols-3 lg:mx-24">
        {ctas.map((cta) => (
          <div className="flex flex-col items-center gap-3">
            <img
              className=" flex-1 h-40 w-40"
              src={cta.image}
              alt="Crypto Spends Icon"
              loading="lazy"
            />
            <p className="lg:max-w-xs mx-auto text-center font-light text-lg lg:text-2xl">
              {cta.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8 justify-center items-center pt-20">
        <button className="button px-8 py-4 text-lg">Create Account</button>
        <p className="max-w-xs font-light mx-auto text-center">
          Get a free metal card with a direct deposit of $250 or above
        </p>
      </div>
      <div>
        <img
          src="https://cdn.onjuno.com/crypto-landing/crypto-spends-bg%402x.png"
          alt="Bottom CTA Background Image"
          loading="lazy"
          width={1600}
          height={300}
        />
      </div>
    </section>
  )
}
