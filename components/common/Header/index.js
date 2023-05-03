import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import useScrollDirection from '~/hooks/useScrollDirection';
import getUser from '~/utils/getUser';
import signOut from '~/utils/signOut';
import { Avatar } from '@mui/material';
import Popover from '@mui/material/Popover';
import styles from "./styles.module.scss"
import { useRouter } from 'next/router';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const direction = useScrollDirection();
  const {name, image, session} = getUser();

  
const handleSignOut = () => {
  signOut();
  router.push("/")
}
const transparent = direction == "top" ? "bg-transparent" : "bg-white shadow-md";
  return (
  <header>
    <div className={`w-screen py-3 px-1.5 fixed top-0 z-30 ${transparent}`}>
        <nav className='flex justify-between mx-auto w-4/5 items-center op'>
            <Link href='/'><Image src='/imgs/logo.png' width={45} height={45} alt='logo' priority></Image></Link>
            {/*<button onClick={handleToggle} className='sm:hidden'><Image src={display ? '/imgs/icons/close.svg' : '/imgs/icons/menu.svg'} width={25} height={25} alt='toggle'></Image></button>*/}
            { session ?
            <> 
              <Avatar
              alt={name}
              src={image}
              aria-describedby={id} variant="contained" onClick={handleClick}
            />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <div className={styles['popover']}>
              <Link href="/user/profile">
                <div className={styles['popover__item']}>
                <AccountCircleOutlinedIcon
                fontSize="large" 
                sx={{ color: "black"}}
                />
                Profile
                </div>
              </Link>
              <Link href="/user/tracking">
                <div className={styles['popover__item']}>
                  <EventAvailableOutlinedIcon
                  fontSize="large" 
                  sx={{ color: "black"}}
                  />
                  Điểm danh
                  </div>
              </Link>
              <button className={styles['btn']} onClick={handleSignOut}>
                Đăng xuất
                <LogoutIcon />
              </button>
            </div>
          </Popover>
          </>
            : 
            <Link href='/login'><div className='rounded-3xl py-3 px-8 text-white bg-primary-blue font-medium cursor-pointer hover:shadow-md'>Đăng nhập</div></Link>
            }
        </nav>
    </div>
        
  </header>
  );
}
      //  <div className={`xs:hidden transition-all delay-75 fixed top-24 left-0 w-2/3 h-screen bg-gray z-20 py-10 ${!display ? '-translate-x-full opacity-0' : ''}`}>
      //       <ul className='flex flex-col items-center font-medium'>
      //       <li ><Link href='/login'><div className='rounded-3xl py-3 px-8 text-white bg-primary-blue font-medium cursor-pointer'>Đăng nhập</div></Link></li>
      //       </ul>
      //   </div>
      //   {display && 
      //   <div className='w-screen h-screen bg-black-blur z-10 fixed sm:hidden top-0'></div>
      //   }