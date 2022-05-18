import { MailIcon } from "@heroicons/react/outline"

export default function EmailBanner() {
  return (
    <section className="bg-slate-100/50">
      <div className="flex flex-col px-4 items-center justify-center gap-10 py-base sm:flex-row sm:px-8 xl:gap-40">
        <div className="text-center sm:text-left">
          <h2 className="h2 sm:max-w-xs xl:max-w-full xl:text-5xl">
            Your Money, Simplified.
          </h2>
          <p className="p pt-4 text-lg max-w-sm xl:max-w-xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            commodi
          </p>
        </div>
        <div className="grid gap-3 w-full sm:w-auto">
          <p className="text-xs sm:text-base">
            Create a free checking account within 5 min
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex items-center">
              <MailIcon className="w-10 absolute left-2" />
              <input
                className="border-black border pl-16 py-5 w-full rounded-lg focus:ring-0 focus:border-black"
                type="text"
                placeholder="Enter Email Address"
              />
            </div>
            <button className="button bg-indigo-600 py-5 sm:py-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
