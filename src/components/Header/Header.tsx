import {HiMenuAlt4} from 'react-icons/hi'

const Header = () => {
  return (
    <header>
        <nav className="flex justify-between p-4 items-center">
            <h3 className="font-bold flex items-center gap-2"><HiMenuAlt4 className='text-2xl' />Shop</h3>
            <h2 className="font-bold text-2xl font__bruno__ace">PWP</h2>
            <h3 className="font-bold">Github</h3>
        </nav>
    </header>
  )
}

export default Header