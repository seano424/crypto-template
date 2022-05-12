import { smallCta } from 'constants/smallCta'

export default function SmallCta() {
  return (
    <>
      {smallCta.map((cta) => (
        <section key={cta.heading}>
          <div className="m-5 bg-[#400000] rounded-lg p-5">
            <button className="py-3 px-5 bg-gray-900 rounded-full text-gray-400 tracking-widest">
              {cta.buttonText}
            </button>
            <h4 className="text-3xl my-2 font-bold">{cta.heading}</h4>
            <p className="text-lg text-gray-400 tracking-wider font-light">
              {cta.subheading}
            </p>
            <img
              src={cta.image}
              alt="small cta image"
              height={100}
              width={400}
              loading="lazy"
            />
          </div>
        </section>
      ))}
    </>
  )
}
