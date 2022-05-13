import { StarIcon } from '@heroicons/react/solid'

export default function CtaNumbers() {
  return (
    <section>
      <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 gap-20 py-32 flex flex-col md:flex-row items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center gap-5">
          <h2>41,475</h2>
          <h4 className="font-light text-2xl tracking-wider">Members</h4>
        </div>
        <div className="text-center flex flex-col items-center justify-center gap-5">
          <h2>$223M</h2>
          <h4 className="font-light text-2xl tracking-wider">Transactions</h4>
        </div>
        <div className="text-center flex flex-col items-center justify-center gap-5">
          <h2 className='flex items-center'>
            4.4 <StarIcon className='w-12' />
          </h2>
          <h4 className="font-light text-2xl tracking-wider">
            Trustpilot Rating
          </h4>
        </div>
      </div>
    </section>
  )
}
