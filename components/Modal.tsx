import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, XIcon } from '@heroicons/react/solid'
import Logo from '../public/svgs/logo.svg'

interface Props {
  isModalOpen: boolean
  handleModal: any
  dropdownList: {
    title: string
    listItems: {
      title: string
      route: string
    }[]
  }[]
  sitename: string
}

export default function Modal(props: Props) {
  const { isModalOpen, handleModal, dropdownList, sitename } = props
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
        <div className="absolute inset-0 bg-black z-50 p-5 flex flex-col">
          <nav className="flex justify-between items-center lg:p-7 w-full lg:px-56">
            <Link href="/">
              <a className="flex space-x-2 lg:text-3xl font-bold pr-8">
                <Logo />
                <span className="hidden lg:flex">{sitename}</span>
              </a>
            </Link>
            <XIcon onClick={handleModal} className="w-8 cursor-pointer" />
          </nav>
          <article className="py-10 grid gap-4">
            {dropdownList.map((list, i) => (
              <div key={i}>
                <div
                  onClick={() => handleDropdown(i)}
                  className="flex items-center pb-3"
                >
                  <p>{list.title}</p>
                  <ChevronDownIcon className="w-4 cursor-pointer" />
                </div>
                {state.open && state.dropdownToOpen === i && (
                  <div className="pl-5 grid gap-3">
                    {list.listItems.map((item) => (
                      <Link href={item.route} key={item.title}>
                        <a className="list-none">{item.title}</a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-8 pt-8">
              <button className="button bg-white text-indigo-600">Login</button>
              <button className="button">Get Started</button>
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
