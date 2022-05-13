import Image from 'next/image'

export default function AsFeaturedIn() {
  return (
    <section className="flex gap-10 flex-col justify-center p-10 bg-gray-900/30">
      <p className="uppercase text-center text-gray-400 tracking-widest md:text-xl">
        As featured in
      </p>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 w-full">
        <div>
          <Image
            className="flex justify-center object-contain"
            height={40}
            width={100}
            alt="Fortune"
            src="/images/businesses/fortune.png"
          />
        </div>
        <div>
          <Image
            className="flex justify-center object-contain"
            height={40}
            width={100}
            src="/images/businesses/banker.png"
            alt="American Banker"
          />
        </div>
        <div>
          <Image
            className="flex justify-center object-contain"
            height={40}
            width={100}
            src="/images/businesses/techcrunch.png"
            alt="American techcrunch"
          />
        </div>
        <div>
          <Image
            className="flex justify-center object-contain"
            height={40}
            width={100}
            src="/images/businesses/coindesk.png"
            alt="American coindesk"
          />
        </div>
        <div>
          <Image
            className="flex justify-center w-full object-contain"
            height={40}
            width={100}
            src="/images/businesses/forbes.png"
            alt="Forbes"
          />
        </div>
      </div>
    </section>
  )
}
