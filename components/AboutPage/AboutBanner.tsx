interface Props {
  heading: string
  subheading: string
  half?: boolean
}

export default function Banner(props: Props) {
  const {
    half = false,
    heading = 'Our Team',
    subheading = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis itaque fuga quam tempora facere laudantium ut non consequatur sunt distinctio error',
  } = props

  return (
    <section
      className={`flex flex-col gap-3 lg:gap-8 text-center my-7 ${
        half ? 'md:text-left md:my-0' : 'md:my-16'
      }`}
    >
      <h2 className="font-serif font-light text-2xl md:text-3xl lg:text-5xl">{heading}</h2>
      <p className={`para leading-relaxed`}>{subheading}</p>
    </section>
  )
}
