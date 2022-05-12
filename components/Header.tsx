import Dropdown from './Dropdown'
import { dropdownList } from 'constants/dropdownList'
import Link from 'next/link'
import Logo from '../public/svgs/logo.svg'
import Hamburger from '../public/svgs/hamburger.svg'

interface HeaderProps {
  sitename: string
}

export default function Header(props: HeaderProps) {
  const { sitename = 'ONJUNO' } = props

  return (
    <nav className="flex justify-between p-8 w-full lg:px-24">
      <ul className="flex items-center space-x-4">
        <Link href="/">
          <a className="flex space-x-2 lg:text-3xl font-bold">
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
          <button className="button">Login</button>
        </li>
        <li>
          <button className="button">
            Create Account
          </button>
        </li>
        <li>
          <Hamburger />
        </li>
      </ul>
    </nav>
  )
}
