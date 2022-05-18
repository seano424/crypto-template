import { useState } from 'react'
import Image from 'next/image'

interface Props {
  team: any[]
}

export default function TeamMembers(props: Props) {
  const { team } = props
  const [peopleToShow, setPeopleToShow] = useState(4)

  return (
    <section className="sm:my-12 container mx-auto m-base xl:px-40">
      {/* Large Grid */}
      <div className="hidden grid-cols-4 md:grid">
        {team.slice(0, peopleToShow + 16).map((member, i) => (
          <div
            className="flex flex-col items-center justify-center gap-2 my-10"
            key={i}
          >
            <div className="relative h-32 w-32 sm:h-40 sm:w-40">
              <Image
                layout="fill"
                className="object-cover rounded-full"
                src={member.image}
                alt={`${member.name} profile image`}
              />
            </div>
            <p className="font-bold text-gray-700">{member.name}</p>
            <p className="para text-base sm:text-xl">{member.role}</p>
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
                className="object-contain cursor-pointer self-center w-3"
              >
                <path
                  fill="#B3B3B3"
                  d="M0 5.625H4.025V18H0zM14.99 5.77c-.043-.013-.084-.028-.129-.04-.054-.013-.108-.023-.163-.032-.214-.043-.448-.073-.722-.073-2.347 0-3.835 1.707-4.326 2.366V5.625H5.625V18H9.65v-6.75s3.042-4.237 4.326-1.125V18H18V9.65c0-1.87-1.281-3.429-3.01-3.88zM1.969 3.938c1.087 0 1.968-.882 1.968-1.97C3.938.882 3.058 0 1.97 0S0 .881 0 1.969c0 1.087.881 1.968 1.969 1.968z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 17"
                className="object-contain cursor-pointer self-center w-3"
              >
                <path
                  fill="#B3B3B3"
                  d="M20.308 2.453c-.756.332-1.56.551-2.4.658.864-.516 1.523-1.325 1.832-2.301-.804.48-1.693.818-2.64 1.007C16.336 1.004 15.247.5 14.06.5c-2.306 0-4.161 1.87-4.161 4.164 0 .33.028.648.096.95-3.461-.17-6.524-1.828-8.581-4.355-.36.623-.57 1.337-.57 2.104 0 1.442.743 2.72 1.85 3.46-.67-.012-1.326-.207-1.882-.512v.045c0 2.023 1.443 3.704 3.336 4.091-.339.093-.708.137-1.092.137-.266 0-.535-.015-.788-.071.54 1.649 2.07 2.86 3.89 2.9C4.742 14.521 2.943 15.19.996 15.19c-.341 0-.669-.015-.996-.057C1.844 16.32 4.03 17 6.387 17c7.66 0 11.85-6.346 11.85-11.847 0-.184-.007-.362-.016-.538.826-.587 1.52-1.319 2.087-2.162z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Small Grid */}
      <div className="grid grid-cols-2 md:hidden">
        {team.slice(0, peopleToShow).map((member, i) => (
          <div
            className="flex flex-col items-center justify-center gap-2 my-10"
            key={i}
          >
            <div className="relative h-32 w-32 sm:h-40 sm:w-40">
              <Image
                layout="fill"
                className="object-cover rounded-full"
                src={member.image}
                alt={`${member.name} profile image`}
              />
            </div>
            <p className="font-bold text-gray-700">{member.name}</p>
            <p className="para text-base sm:text-xl">{member.role}</p>
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
                className="object-contain cursor-pointer self-center w-3"
              >
                <path
                  fill="#B3B3B3"
                  d="M0 5.625H4.025V18H0zM14.99 5.77c-.043-.013-.084-.028-.129-.04-.054-.013-.108-.023-.163-.032-.214-.043-.448-.073-.722-.073-2.347 0-3.835 1.707-4.326 2.366V5.625H5.625V18H9.65v-6.75s3.042-4.237 4.326-1.125V18H18V9.65c0-1.87-1.281-3.429-3.01-3.88zM1.969 3.938c1.087 0 1.968-.882 1.968-1.97C3.938.882 3.058 0 1.97 0S0 .881 0 1.969c0 1.087.881 1.968 1.969 1.968z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 17"
                className="object-contain cursor-pointer self-center w-3"
              >
                <path
                  fill="#B3B3B3"
                  d="M20.308 2.453c-.756.332-1.56.551-2.4.658.864-.516 1.523-1.325 1.832-2.301-.804.48-1.693.818-2.64 1.007C16.336 1.004 15.247.5 14.06.5c-2.306 0-4.161 1.87-4.161 4.164 0 .33.028.648.096.95-3.461-.17-6.524-1.828-8.581-4.355-.36.623-.57 1.337-.57 2.104 0 1.442.743 2.72 1.85 3.46-.67-.012-1.326-.207-1.882-.512v.045c0 2.023 1.443 3.704 3.336 4.091-.339.093-.708.137-1.092.137-.266 0-.535-.015-.788-.071.54 1.649 2.07 2.86 3.89 2.9C4.742 14.521 2.943 15.19.996 15.19c-.341 0-.669-.015-.996-.057C1.844 16.32 4.03 17 6.387 17c7.66 0 11.85-6.346 11.85-11.847 0-.184-.007-.362-.016-.538.826-.587 1.52-1.319 2.087-2.162z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Large View Button */}
      {peopleToShow + 16 < team.length && (
        <div className="md:flex hidden justify-center">
          <button
            onClick={() => setPeopleToShow(team.length)}
            className="text-indigo-500 text-xl font-semibold tracking-wide md:hidden"
          >
            View More
          </button>
        </div>
      )}

      {/* Small View Button */}
      {peopleToShow < team.length && (
        <div className="flex justify-center md:hidden">
          <button
            onClick={() => setPeopleToShow(team.length)}
            className="text-indigo-500 text-xl font-semibold tracking-wide lg:hidden"
          >
            View More
          </button>
        </div>
      )}
    </section>
  )
}
