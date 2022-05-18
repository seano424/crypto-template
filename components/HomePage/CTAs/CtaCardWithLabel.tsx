import Image from 'next/image'
interface Props {
  size?: string
  label?: string
  header?: string
  subheader?: string
  image?: string
}

export default function CtaCardWithLabel(props:Props) {

  const { size } = props
  const lg = size === 'lg'

  return (
    <div
      className={`relative h-[500px] flex flex-col overflow-hidden bg-zinc-900/80 rounded-xl ${
        lg ? 'lg:w-full lg:h-full lg:flex-row' : 'lg:h-[600px] lg:w-[800px]'
      }`}
    >
      <div className="w-full p-10 flex flex-col gap-3">
        <button className="w-max button rounded-full bg-gray-700 text-gray-300">
          Earn
        </button>
        <h4>10% back on crypto spends</h4>
        <p>10% back on crypto spends</p>
      </div>
      <div>
        <Image
          src="https://cdn.onjuno.com/crypto-landing/crypto-power-image-1%402x.png"
          alt="power image"
          loading="lazy"
          height={500}
          width={800}
        />
      </div>
    </div>
  )
}
