import {HiMenuAlt4} from 'react-icons/hi'
import {AiFillGithub} from 'react-icons/ai'
const Header = () => {
  return (
    <header>
        <nav className="flex justify-between p-4 items-center">
            <h3 className="font-bold flex items-center gap-2"><HiMenuAlt4 className='text-2xl' />Shop</h3>
            <div className='flex flex-col items-center'>
              <h2 className="font-bold text-2xl font__bruno__ace tracking-widest">P<span className='text-primary'>W</span>P</h2>
              <p className='tracking-[0.3rem] uppercase text-center hidden md:block'>Price Wise Pakistan</p>
            </div>
            <a href='https://github.com/mumer119131' target='_blank' className="font-bold flex items-center gap-1"><p className='h-max'>Github</p><AiFillGithub className="text-2xl"/></a>
        </nav>
    </header>
  )
}

export default Header