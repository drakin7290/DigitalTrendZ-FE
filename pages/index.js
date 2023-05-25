import HomeContainer from '~/containers/HomeContainer';
import MainLayout from '~/layout/MainLayout';
import getUser from '../utils/getUser';
import UserContainer from '~/containers/UserContainer';
import LoadingContainer from '~/containers/LoadingContainer';
import { useEffect, useState } from 'react';
import isLogged from '~/utils/isLogged';


export default function HomePage() {
  const logged = isLogged();
  


  return (
    <MainLayout>
        {logged 
         ? <UserContainer />
         : <HomeContainer />
        }
    </MainLayout>
  );
}
