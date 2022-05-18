import Image from 'next/image'
import Banner from '@/components/Banners/AboutBanner'

interface Props {
  button?: boolean
  buttonText?: string
  values: {
    heading: string
    subheading: string
    data: {
      icon: string
      text?: string
    }[]
  }
  grid: 1 | 2 | 3
}

export default function GridCta(props: Props) {
  const { values, button, buttonText = 'See open roles', grid } = props

  return (
    <section>
      <div className="container mx-auto my-base grid gap-10 md:grid-cols-2">
        <div className={`${button && 'flex flex-col gap-10'} xl:pr-20`}>
          <div className="flex flex-col gap-3 text-center my-7 md:text-left md:my-0 lg:gap-8">
            <h2 className="font-serif font-light text-2xl md:text-4xl xl:text-5xl">
              {values.heading}
            </h2>
            <p className="p">{values.subheading}</p>
          </div>
          {button && (
            <button className="button bg-indigo-600 py-4 w-full lg:w-max lg:px-20">
              {buttonText}
            </button>
          )}
        </div>
        {/* grid cols 1 2 or 3 text or no text */}
        <div
          className={`${grid === 2 && 'grid grid-cols-2'} ${
            grid === 3 && 'grid-cols-2 grid gap-5 md:grid-cols-3'
          }`}
        >
          {grid === 3 &&
            values.data.map((value, i) => (
              <Image
                key={i}
                src={value.icon}
                alt="Icon"
                width={250}
                height={250}
                className="object-cover"
              />
            ))}
          {grid !== 3 &&
            values.data.map((value, i) => (
              <div
                key={i}
                className={`flex gap-5 mb-10 items-center ${
                  grid === 2 &&
                  'flex-col justify-center lg:justify-start xl:flex-row'
                }`}
              >
                <div className="relative h-20 w-20">
                  <Image
                    src={value.icon}
                    alt="Icon"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                {value.text && (
                  <p
                    className={`flex-1 h3 ${
                      grid === 2
                        ? 'font-semibold'
                        : 'font-light'
                    }`}
                  >
                    {value.text}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
