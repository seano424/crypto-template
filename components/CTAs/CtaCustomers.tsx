const customers = [
  {
    image: 'https://cdn.onjuno.com/crypto-landing/testimonial-6%402x.png',
    name: 'The Ubiquitous',
    date: 'Apr 3, 2022',
    comment:
      'The fact that you can buy crypto directly in the same place you bank is such a convenience',
  },
  {
    image: 'https://cdn.onjuno.com/crypto-landing/testimonial-4%402x.png',
    name: 'mattwithouthet',
    date: 'Apr 02, 2022',
    comment:
      'The fact that you can buy crypto directly in the same place you bank is such a convenience',
  },
  {
    image: 'https://cdn.onjuno.com/crypto-landing/testimonial-3%402x.png',
    name: 'DeFiDaniel',
    date: 'Feb 28, 2022',
    comment: 'Frictionless movement between fiat and crypto',
  },
  {
    image: 'https://cdn.onjuno.com/crypto-landing/testimonial-2%402x.png',
    name: 'MEIO',
    date: 'Apr 3, 2022',
    comment:
      'The fact that you can buy crypto directly in the same place you bank is such a convenience',
  },
]

export default function CtaCustomers() {
  return (
    <section className="mb-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10">
        {customers.map((customer, i) => (
          <div key={i} className="card p-8 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                height={50}
                width={50}
                src={customer.image}
                alt="Profile Image"
              />
              <div>
                <p className="text-base">{customer.name}</p>
                <p className="text-light text-sm">@{customer.name.trim()}</p>
              </div>
            </div>
            <p className="text-base">{customer.comment}</p>
            <p className="text-light text-sm">{customer.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
