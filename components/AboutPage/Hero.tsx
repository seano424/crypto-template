import Image from 'next/image'

export default function Hero() {
  return (
    <section className="text-center grid gap-5 border-b">
      <div className="px-5 grid gap-3 sm:px-20 place-items-center">
        <h1 className="text-center font-serif font-medium text-3xl sm:text-5xl lg:max-w-3xl">
          We are a mission driven company
        </h1>
        <p className="text-slate-400 text-lg sm:text-2xl font-light tracking-wide pb-5 sm:px-40 leading-relaxed">
          Our goal is to increase financial freedom and provide access to fair
          and transparent financial services
        </p>
        <button className="button w-full sm:w-max px-16 py-4 text-2xl bg-indigo-600 mb-16">
          Join Now
        </button>
      </div>
      <div className="w-full h-80 lg:h-[650px] relative">
        <Image
          className="object-cover"
          src="https://cdn.onjuno.com/About/about-hero-image%402x.jpg"
          alt="About Page Hero Image"
          layout="fill"
        />
      </div>
    </section>
  )
}
