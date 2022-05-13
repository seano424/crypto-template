import { useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import { dropdownList } from 'constants/dropdownList'
import Link from 'next/link'
import Logo from '../public/svgs/logo.svg'
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/solid'
import Modal from './Modal'

interface HeaderProps {
  sitename: string
}

export default function Navbar(props: HeaderProps) {
  const { sitename = 'ONJUNO' } = props
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  function handleModal() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <nav className="flex justify-between p-5 lg:p-7 w-full lg:px-56">
        <ul className="flex items-center gap-10">
          <Link href="/">
            <a className="flex space-x-2 lg:text-3xl font-bold pr-8">
              <Logo />
              <span className="hidden lg:flex">{sitename}</span>
            </a>
          </Link>
          {dropdownList.map((list, i) => (
            <Dropdown key={i} i={i} list={list} />
          ))}
        </ul>
        <ul className="flex items-center space-x-4">
          <li className="hidden lg:flex">
            <button className="button text-indigo-600 bg-white px-8">
              Login
            </button>
          </li>
          <li>
            <button className="button text-sm md:text-base">
              Create Account
            </button>
          </li>
          <MenuIcon
            onClick={handleModal}
            className="w-8 lg:hidden cursor-pointer"
          />
        </ul>
      </nav>
      <Modal
        isModalOpen={isModalOpen}
        handleModal={handleModal}
        sitename={sitename}
        dropdownList={dropdownList}
      />
    </>
  )
}
