import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { MenuIcon } from '@heroicons/react/solid'

import { dropdownList } from 'constants/dropdownList'
import Logo from '../public/svgs/logo.svg'
import Dropdown from './Dropdown'
import Modal from './Modal'

interface HeaderProps {
  sitename: string
  colorScheme: 'dark' | 'light'
}

export default function Navbar(props: HeaderProps) {
  const { sitename = 'ONJUNO', colorScheme } = props
  const [isModalOpen, setIsModalOpen] = useState(false)

  const darkScheme = colorScheme === 'dark'

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
          {darkScheme ? (
            <Link href="/">
              <a className="flex space-x-2 lg:text-3xl font-bold pr-8">
                <Logo />
                <span className="hidden lg:flex">{sitename}</span>
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a>
                <Image
                  className="object-cover"
                  src="https://cdn.onjuno.com/on-juno%402x.png"
                  alt="Logo"
                  height={30}
                  width={120}
                />
              </a>
            </Link>
          )}
          {dropdownList.map((list, i) => (
            <Dropdown key={i} i={i} list={list} />
          ))}
        </ul>
        <ul className="flex items-center space-x-4">
          <li className="hidden lg:flex">
            <button
              className={`button text-indigo-600 bg-white px-8 ${
                !darkScheme && 'border border-indigo-600'
              }`}
            >
              Login
            </button>
          </li>
          {darkScheme && (
            <li>
              <button className="button text-sm md:text-base">
                Create Account
              </button>
            </li>
          )}

          {!darkScheme && (
            <li>
              <button className="hidden lg:flex button text-sm md:text-base">
                Get Started
              </button>
            </li>
          )}
          <MenuIcon
            onClick={handleModal}
            className={`lg:hidden cursor-pointer ${
              !darkScheme ? 'text-gray-400 w-7' : 'w-8'
            }`}
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
