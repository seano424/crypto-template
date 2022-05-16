interface Props {
  heading: string
  subheading: string
}

export default function Banner(props: Props) {
  const {
    heading = 'Our Team',
    subheading = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis itaque fuga quam tempora facere laudantium ut non consequatur sunt distinctio error',
  } = props

  return (
    <section className="text-center grid gap-3 mb-3 mt-20 px-5">
      <h2 
        className="font-serif font-light text-2xl sm:text-4xl"
      >
        {heading}
      </h2>
      <p className="text-stone-500/80 tracking-wide leading-relaxed text-lg sm:text-2xl font-light sm:max-w-xl mx-auto">
        {subheading}
      </p>
    </section>
  )
}
