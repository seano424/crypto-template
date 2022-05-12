import Image from "next/image"

export default function AsFeaturedIn() {
  return (
    <section className="flex gap-10 flex-col justify-center p-10 bg-gray-900/30">
      <p className="uppercase text-center text-gray-400 tracking-widest md:text-xl">
        As featured in
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-4 w-full">
        <Image
          className="flex justify-center w-auto h-10 object-contain"
          height={40}
          width={138}
          alt="Fortune"
          src="/images/businesses/fortune.png"
        />
        <Image
          className="flex justify-center w-auto h-10 object-contain"
          height={40}
          width={138}
          src="/images/businesses/banker.png"
          alt="American Banker"
        />
        <Image
          className="flex justify-center w-auto h-10 object-contain"
          height={40}
          width={138}
          src="/images/businesses/techcrunch.png"
          alt="American techcrunch"
        />
        <Image
          className="flex justify-center w-auto h-10 object-contain"
          height={40}
          width={138}
          src="/images/businesses/coindesk.png"
          alt="American coindesk"
        />
        <Image
          className="flex justify-center w-full h-10 object-contain col-span-2 md:col-span-1"
          height={40}
          width={138}
          src="/images/businesses/forbes.png"
          alt="Forbes"
        />
      </div>
    </section>
  )
}
