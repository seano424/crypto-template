import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface Props {
  isModalOpen: boolean
  dropdownList: {
    title: string
    listItems: {
      title: string
      route: string
    }[]
  }[]
}

export default function Modal(props: Props) {
  const { isModalOpen, dropdownList } = props
  const [state, setState] = useState({
    dropdownToOpen: 0,
    open: false,
  })

  function handleDropdown(i: number) {
    if (state.dropdownToOpen === i) {
      setState((prevState) => ({
        ...prevState,
        open: !prevState.open,
      }))
    } else {
      setState((prevState) => ({
        ...prevState,
        dropdownToOpen: i,
      }))
    }
  }

  return (
    <div>
      {isModalOpen && (
        <div className="bg-white z-50 flex flex-col">
          <article className="px-5 sm:pl-10 grid gap-5 sm:gap-1 text-gray-500">
            <Link href="/">
              <a className="list-none pb-3 text-gray-500 text-sm sm:text-lg">Home</a>
            </Link>
            {dropdownList.map((list, i) => (
              <div key={i}>
                <div
                  onClick={() => handleDropdown(i)}
                  className="flex items-center pb-3 cursor-pointer select-none"
                >
                  <p
                    className={`text-gray-500 text-sm sm:text-lg ${
                      list.title === 'Products' && 'text-blue-600'
                    }`}
                  >
                    {list.title}
                  </p>
                  <ChevronDownIcon className="w-4 cursor-pointer" />
                </div>
                {state.open && state.dropdownToOpen === i && (
                  <div className="pl-5 grid gap-3">
                    {list.listItems.map((item) => (
                      <Link href={item.route} key={item.title}>
                        <a
                          className={`list-none ${
                            item.title === 'International Transfers' &&
                            'text-blue-600'
                          }`}
                        >
                          {item.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-4">
              <button className="button bg-white text-indigo-600 max-w-sm border-indigo-600 border-2">Login</button>
              <button className="button bg-indigo-600 max-w-sm">Get Started</button>
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
