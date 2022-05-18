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
      className={`container flex flex-col gap-3 text-center my-7 lg:gap-8 ${
        half ? 'md:text-left md:my-0' : 'md:my-16 lg:px-56 xl:px-80'
      }`}
    >
      <h2 className="h2">{heading}</h2>
      <p className="p">{subheading}</p>
    </section>
  )
}
