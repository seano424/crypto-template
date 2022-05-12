interface Props {
  header?: string
  subheader?: string
}

export default function Banner(props: Props) {
  const { header, subheader } = props
  return (
    <section>
      <div className="text-center pt-20 pb-10">
        <h4 className="max-w-4xl lg:text-6xl mx-auto">{header}</h4>
        {subheader && <p className="max-w-2xl py-5 mx-auto leading-relaxed tracking-wide lg:text-2xl">{subheader}</p>}
      </div>
    </section>
  )
}
