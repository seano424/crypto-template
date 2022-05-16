import Image from 'next/image'
import Banner from './AboutBanner'
import { workValues } from '@/constants/dummyData'

export default function WorkingAtOnJuno() {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-10 mx-5 md:mx-10 lg:max-w-7xl lg:mx-auto mt-12 md:mt-32">
        <div className="flex flex-col gap-10 lg:pr-20">
          <Banner
            half={true}
            heading="Working At Juno"
            subheading="We're looking for talented people who are tenacious and passionate about building high quality products that impact the financial futures of millions."
          />
          <button className="button bg-indigo-600 py-4 w-full lg:w-max lg:px-20">
            See Open Roles
          </button>
        </div>
        <div>
          {workValues.map((value, i) => (
            <div key={i} className="flex gap-5 mb-10 items-center">
              <div className="relative h-16 w-16">
                <Image
                  src={value.icon}
                  alt="Icon"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 para pr-5 font-light flex-1">
                {value.heading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
