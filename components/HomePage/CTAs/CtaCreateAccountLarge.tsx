import Image from 'next/image'

export default function CtaCreateAccountLarge() {
  return (
    <section>
      <div className="hidden xl:flex bg-gray-50 pt-20 text-black relative px-52">
        <div className="flex flex-col gap-6">
          <h1>A Checking Account For Your Crypto</h1>
          <p className="text-gray-700 max-w-3xl text-2xl font-light tracking-wider">Manage your cash and crypto from one simple account. Its free and
            comes with a metal card.</p>
          <div className="flex items-center gap-3">
            <Image
              className="shadow-lg rounded"
              src="https://chart.googleapis.com/chart?cht=qr&chl=https://onjuno.onelink.me/1WrP/homepage&chs=275&margin=0"
              alt="QR Code"
              height={200}
              width={200}
              loading="lazy"
            />
            <p className="text-gray-700 text-xl flex flex-col">
              <span>Scan here to</span>
              <span> download the app</span>
            </p>
          </div>
        </div>
        <Image
          className="object-cover h-[600px]"
          src="https://cdn.onjuno.com/mobile-app-1%402x.png"
          alt="Create Account CTA Image"
          loading="lazy"
          height={600}
          width={600}
        />
      </div>
    </section>
  )
}
