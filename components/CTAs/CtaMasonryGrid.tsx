import Image from 'next/image'
import Banner from "../Banners/Banner"

const ctas = [
  {
    large: false,
    heading: 'Free ATM Access',
    subheading:
      '80K+ fee-free ATMs at locations like Walgreens, 7-Eleven, CVS, and more',
    image: 'https://cdn.onjuno.com/crypto-landing/free-atm-1%402x.png',
  },
  {
    large: false,
    heading: 'FDIC Insured',
    subheading:
      '80K+ fee-free ATMs at locations like Walgreens, 7-Eleven, CVS, and more',
    image: 'https://cdn.onjuno.com/crypto-landing/fdic-insured-1%402x.png',
  },
  {
    large: false,
    heading: 'Bank Transfers',
    subheading:
      '80K+ fee-free ATMs at locations like Walgreens, 7-Eleven, CVS, and more',
    image: 'https://cdn.onjuno.com/crypto-landing/bank-transfer-1%402x.png',
  },
  {
    large: true,
    heading: 'Say no to fees',
    subheading:
      '80K+ fee-free ATMs at locations like Walgreens, 7-Eleven, CVS, and more',
    image: 'https://cdn.onjuno.com/crypto-landing/no-fees-bg-1%402x.png',
  },
  {
    large: false,
    heading: 'Tax Compliant',
    subheading:
      'Automated tax reporting through form 1099 for cash and crypto earnings',
    image: 'https://cdn.onjuno.com/crypto-landing/free-atm-1%402x.png',
  },
]

export default function CtaMasonryGrid() {
  return (
    <section>
      <Banner header="A complete bank replacement" />
      <div className="mx-10 mb-10 grid grid-cols-1 md:grid-cols-6 gap-3">
        {ctas.map((cta, index) => (
          <div
            key={index}
            className={`max-h-[400px] overflow-hidden card ${
              cta.large ? 'md:col-span-4' : 'md:col-span-2'
            }`}
          >
            <div className="flex flex-col gap-3 p-5">
              <h4 className="text-2xl tracking-wide">{cta.heading}</h4>
              <p className="font-light text-gray-400 text-lg leading-relaxed">
                {cta.subheading}
              </p>
            </div>
            <Image 
              src={cta.image} 
              alt="CTA Image"
              height={200}
              width={400}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
