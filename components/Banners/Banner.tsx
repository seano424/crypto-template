import Discord from '/public/svgs/discord.svg'
import Logo from '/public/svgs/logo.svg'
interface Props {
  header?: string
  subheader?: string
  buttonText?: string
  buttonIcon?: string
}

export default function Banner(props: Props) {
  const { header, subheader, buttonIcon, buttonText } = props
  const icon =
    buttonIcon === 'discord' ? (
      <Discord />
    ) : buttonIcon === 'logo' ? (
      <Logo />
    ) : (
      <Logo />
    )

  return (
    <section>
      <div className="text-center pt-20 pb-10 flex flex-col items-center">
        <h4 className="max-w-4xl md:text-6xl mx-auto">{header}</h4>
        {subheader && (
          <p className="max-w-3xl py-5 mx-auto leading-relaxed tracking-wide lg:text-2xl">
            {subheader}
          </p>
        )}
        {buttonText && (
          <button className="button text-xl py-4 px-12 flex items-center gap-2">
            {buttonIcon && icon}
            Join our community
          </button>
        )}
      </div>
    </section>
  )
}
