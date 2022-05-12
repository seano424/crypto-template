import { useRef, useState } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'

interface Props {
  list: {
    title: string
    listItems: {
      title: string
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
    <li
      onClick={handleClick}
      ref={dropdownRef}
      key={i}
      className="flex-col select-none hidden lg:flex"
    >
      <div className="flex items-center space-x-1 cursor-pointer">
        <span>{list.title}</span>
      </div>
      <div
        className={`absolute transition-all duration-500 ease-linear top-[5rem] w-40 rounded bg-white text-black p-4 
        ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}
      >
        <ul className='grid gap-3 text-gray-600'>
          {list.listItems.map((item, i) => (
            <li key={i}>{item.title}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}

// ${open ? 'opacity-100' : 'opacity-0'}
