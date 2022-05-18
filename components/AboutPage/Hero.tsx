import Image from 'next/image'

export default function Hero() {
  return (
    <section className="text-center grid gap-5 border-b">
      <div className="px-5 grid gap-3 place-items-center sm:px-20">
        <h1 className="text-center font-serif font-medium leading-relaxed text-3xl sm:text-5xl xl:text-7xl lg:max-w-3xl xl:max-w-6xl">
          We are a mission driven company
        </h1>
        <p className="text-stone-500/80 text-lg font-light tracking-wide pb-5 leading-relaxed sm:text-2xl sm:px-40 md:px-0 xl:max-w-2xl xl:mx-auto">
          Our goal is to increase financial freedom and provide access to fair
          and transparent financial services
        </p>
        <button className="button w-full px-16 py-4 text-2xl bg-indigo-600 mb-16 sm:w-max">
          Join Now
        </button>
      </div>
      <div className="w-full h-80 relative lg:h-[650px]">
        <Image
          priority
          className="object-cover"
          src="https://cdn.onjuno.com/About/about-hero-image%402x.jpg"
          alt="About Page Hero Image"
          layout="fill"
        />
      </div>
    </section>
  )
}
