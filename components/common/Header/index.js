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
import isLogged from '~/utils/isLogged';

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
  const data_user = getUser();
  const logged = isLogged ();
  // const data_user = {
  //     name: "Nguyễn Văn A",
  //     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  // }
  // const logged = true;

  
const handleSignOut = () => {
  signOut();
  window.location.reload();
  // mutate ({}, {
  //   onSuccess (data) {
  //     console.log(data)
  //   }
  // })
}
const transparent = direction == "top" ? "bg-transparent" : "bg-white shadow-md";
  return (
  <header>
    <div className={`w-screen py-3 px-1.5 fixed top-0 z-30 ${transparent}`}>
        <div className='flex justify-between mx-auto w-4/5 items-center op'>
            <Link href='/'>
              <a><Image src='/imgs/logo.png' width={50} height={50} alt='logo' priority></Image></a>
            </Link>
            {/*<button onClick={handleToggle} className='sm:hidden'><Image src={display ? '/imgs/icons/close.svg' : '/imgs/icons/menu.svg'} width={25} height={25} alt='toggle'></Image></button>*/}
            { logged ?
            <> 
              <Avatar
              alt={data_user.name}
              src={data_user.avatar}
              className={styles['avatar']}
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
                <a className={styles['popover__item']}>
                <AccountCircleOutlinedIcon
                fontSize="large" 
                sx={{ color: "black"}}
                />
                Profile
                </a>
              </Link>
              <Link href="/user/tracking">
                <a className={styles['popover__item']}>
                  <EventAvailableOutlinedIcon
                  fontSize="large" 
                  sx={{ color: "black"}}
                  />
                  Điểm danh
                  </a>
              </Link>
              <div className={styles['divider']}></div>
              <button className={styles['btn']} onClick={handleSignOut}>
                Đăng xuất
                <LogoutIcon />
              </button>
            </div>
          </Popover>
          </>
            : 
            <Link href='/login'><a className='rounded-3xl py-4 px-10 text-white bg-primary-blue font-bold text-2xl cursor-pointer hover:shadow-md'>Đăng nhập</a></Link>
            }
        </div>
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