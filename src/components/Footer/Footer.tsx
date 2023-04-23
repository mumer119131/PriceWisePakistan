import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
        <footer className="bg-primary py-[3rem] absolute bottom-0 w-full">
        <div className='flex text-4xl items-center justify-center mt-4'>
            <a href="https://github.com/mumer119131" type='_blank'><AiFillGithub /></a>
        </div>
        <p className="text-center font-bold">© 2023 - All rights reserved</p>
    </footer>
    </>
  )
}

export default Footer