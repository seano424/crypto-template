import Image from 'next/image'
import { globalOffices } from '@/constants/dummyData'

export default function GridLocations() {
  return (
    <section className="container grid md:grid-cols-3 my-base">
      {globalOffices.map((office, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center gap-3"
        >
          <Image
            src={office.image}
            alt="Office Image"
            width={100}
            height={100}
          />
          <h3 className="h3 text-md font-semibold">{office.location}</h3>
          <div className="flex flex-col items-center p text-xs">
            <p>{office.address.line1}</p>
            <p>{office.address.line2}</p>
            <p>{office.address.line3}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
