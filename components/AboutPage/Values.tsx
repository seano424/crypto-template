import Image from 'next/image'
import Banner from './AboutBanner'
import { values } from '@/constants/dummyData'

export default function Values() {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-10 mx-5 md:mx-10 lg:max-w-7xl lg:mx-auto">
        <div className="lg:pr-20">
          <Banner
            half={true}
            heading="We're Driven by Our Values"
            subheading="To build simple and trustworthy financial products, we practice a culture of mindful customer empathy coupled with agile execution."
          />
        </div>
        <div className="grid grid-cols-2">
          {values.map((value, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row gap-3 items-center justify-center lg:justify-start mb-3"
            >
              <div className="relative h-20 w-20">
                <Image
                  src={value.icon}
                  alt="Icon"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <p className="text-black font-semibold">{value.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
