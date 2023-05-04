import HomeContainer from '~/containers/HomeContainer';
import MainLayout from '~/layout/MainLayout';
import getUser from '../utils/getUser';
import UserContainer from '~/containers/UserContainer';
import LoadingContainer from '~/containers/LoadingContainer';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const { session } = getUser();
  return (
    <MainLayout>
      {session ? 
      <UserContainer />
      :
      <HomeContainer />
      }
    </MainLayout>
  );
}
