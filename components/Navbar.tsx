import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import {
  homePageDropdownList,
  otherPagesDropdownList,
} from 'constants/dummyData'
import Logo from '../public/svgs/logo.svg'
import Dropdown from './Dropdown'
import Modal from './Modals/Modal'
import HomePageModal from './Modals/HomePageModal'

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
      <nav className="flex justify-between w-full py-5 px-10 xl:px-64">
        <ul className="flex items-center gap-10">
          {darkScheme ? (
            <Link href="/">
              <a className="flex space-x-2 xl:text-3xl font-bold pr-8">
                <Logo />
                <span className="hidden xl:flex">{sitename}</span>
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
          {darkScheme &&
            homePageDropdownList.map((list, i) => (
              <Dropdown key={i} i={i} list={list} />
            ))}

          {!darkScheme &&
            otherPagesDropdownList.map((list, i) => (
              <Dropdown key={i} i={i} list={list} />
            ))}
        </ul>
        <ul className="flex items-center space-x-4">
          <li className="hidden xl:flex">
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
              <button className="hidden xl:flex button text-sm md:text-base">
                Get Started
              </button>
            </li>
          )}
          <MenuIcon
            onClick={handleModal}
            className={`xl:hidden cursor-pointer ${
              !darkScheme ? 'text-gray-400 w-7' : 'w-8'
            } ${isModalOpen && !darkScheme && 'hidden'}`}
          />
          {!darkScheme && (
            <XIcon
              onClick={handleModal}
              className={`cursor-pointer w-5 text-gray-400 ${
                isModalOpen && !darkScheme ? 'block' : 'hidden'
              }`}
            />
          )}
        </ul>
      </nav>
      {darkScheme && (
        <HomePageModal
          isModalOpen={isModalOpen}
          handleModal={handleModal}
          sitename={sitename}
          dropdownList={homePageDropdownList}
        />
      )}
      {!darkScheme && (
        <Modal
          isModalOpen={isModalOpen}
          dropdownList={otherPagesDropdownList}
        />
      )}
    </>
  )
}
