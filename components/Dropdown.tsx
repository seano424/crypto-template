import { useRef, useState } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface Props {
  list: {
    title: string
    listItems: {
      title: string
      route: string
    }[]
  }
  i: number
}

interface MutableRefObject {
  current: any
}

export default function Dropdown(props: Props) {
  const { i, list } = props
  const dropdownRef: MutableRefObject = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  return (
    <div
      onClick={handleClick}
      ref={dropdownRef}
      key={i}
      className="flex-col select-none hidden xl:flex z-50"
    >
      <div className="flex items-center space-x-1 cursor-pointer">
        <span>{list.title}</span>
        <ChevronDownIcon className='w-5'/>
      </div>
      <div
        className={`absolute transition-all duration-500 ease-linear top-[5rem] w-40 rounded bg-white text-black p-4 
        ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}
      >
        <ul className="grid gap-3 text-gray-600">
          {list.listItems.map((item, i) => (
            <Link key={i} href={item.route}>
              <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                {item.title}
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ${open ? 'opacity-100' : 'opacity-0'}
