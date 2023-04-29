import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import useScrollDirection from '~/hooks/useScrollDirection';

export default function Header() {
  const [display, setDisplay ] = useState(false);
  const direction = useScrollDirection();

const handleToggle = () => {
        setDisplay(!display);
}
const transparent = direction == "top" ? "bg-transparent" : "bg-white shadow-md";
  return (
  <header>
    <div className={`w-screen py-3 px-1.5 fixed top-0 z-30 ${transparent} ease-in`}>
        <nav className='flex justify-between mx-auto w-4/5 items-center op'>
            <Link href='/'><Image src='/imgs/logo.png' width={45} height={45} alt='company logo'></Image></Link>
            {/*<button onClick={handleToggle} className='sm:hidden'><Image src={display ? '/imgs/icons/close.svg' : '/imgs/icons/menu.svg'} width={25} height={25} alt='toggle'></Image></button>*/}
            <Link href='/login'><div className='rounded-3xl py-3 px-8 text-white bg-primary-blue font-medium cursor-pointer hover:shadow-md'>Đăng nhập</div></Link>
        </nav>
        </div>
        <div className={`xs:hidden transition-all delay-75 fixed top-24 left-0 w-2/3 h-screen bg-gray z-20 py-10 ${!display ? '-translate-x-full opacity-0' : ''}`}>
            <ul className='flex flex-col items-center font-medium'>
            <li ><Link href='/login'><div className='rounded-3xl py-3 px-8 text-white bg-primary-blue font-medium cursor-pointer'>Đăng nhập</div></Link></li>
            </ul>
        </div>
        {display && 
        <div className='w-screen h-screen bg-black-blur z-10 fixed sm:hidden top-0'></div>
        }
  </header>
  );
}
