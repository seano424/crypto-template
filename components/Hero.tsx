import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'

export default function Hero() {
  return (
    <section className="bg-cover bg-center min-h-[800px] relative flex flex-col-reverse lg:flex-col pt-10">
      <div className="lg:absolute inset-0">
        <Image
          className="h-full w-full"
          src="https://cdn.onjuno.com/crypto-landing/landing-page-hero-1%402x.png"
          alt="Landing Page Image"
          height={1000}
          width={1800}
        />
      </div>
      <div className="flex flex-col gap-5 text-center lg:text-left w-11/12 md:w-[500px] lg:w-6/12 mx-auto lg:mr-0 lg:ml-24">
        <h1 className="text-6xl lg:text-8xl font-black lg:px-0 lg:w-80">
          Some Awesome Website!
        </h1>
        <p className="text-lg text-gray-300 font-light lg:text-3xl lg:max-w-2xl px-10 lg:px-0">
          Some nice tagline I am woohoo oh yea! Keep it going if ya want yea!
        </p>
        <div className="flex max-w-2xl text-xl font-light">
          <div className="hidden lg:flex items-center relative flex-1">
            <span className="absolute left-5 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              className="button bg-white py-6 pl-20 text-black placeholder:text-black w-full mr-3 text-xl font-light focus:ring-0 outline-none"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <button className="button py-5 w-full lg:w-auto">
            Create Account
          </button>
        </div>
        <div className="flex gap-2 justify-center lg:justify-start items-center">
          <p>Excellent</p>
          <div className="flex gap-1 items-center">
            <StarIcon className="w-4 bg-green-500" />
            <StarIcon className="w-4 bg-green-500" />
            <StarIcon className="w-4 bg-green-500" />
            <StarIcon className="w-4 bg-green-500" />
            <div className="relative">
              <div className="absolute top-0 bottom-0 right-0 left-1/2 bg-white"></div>
              <StarIcon className="w-4 bg-green-500" />
            </div>
            <StarIcon className="w-4 text-green-500" />
            <p className="text-sm">Trustpilot</p>
          </div>
        </div>
      </div>
    </section>
  )
}
