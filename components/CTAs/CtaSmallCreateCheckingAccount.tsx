import { MailIcon } from '@heroicons/react/outline'

export default function CtaSmallCreateCheckingAccount() {
  return (
    <section>
      <div className="xl:hidden bg-gray-50 py-20 text-black flex flex-col items-center justify-center text-center">
        <div className="max-w-md flex flex-col gap-2 px-6 sm:px-0">
          <h2 className="text-3xl">Get your free account in under 5 minutes</h2>
          <p className="text-gray-500 text-sm">No credit check required</p>
          <div className="flex items-center relative">
            <MailIcon className="absolute left-5 w-6 text-black" />
            <input
              className="button bg-white py-6 pl-16 text-gray-800 placeholder:text-black w-full mr-3 text-base font-light focus:ring-0 outline-none"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <button className="button py-6 text-xl">Create free account</button>
        </div>
      </div>
    </section>
  )
}
