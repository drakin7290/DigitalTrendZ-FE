import HomeContainer from '~/containers/HomeContainer';
import MainLayout from '~/layout/MainLayout';
import getUser from '../utils/getUser';
import UserContainer from '~/containers/UserContainer';
import LoadingContainer from '~/containers/LoadingContainer';
import { useEffect, useState } from 'react';
import isLogged from '~/utils/isLogged';
import TrackingContainer from '~/containers/TrackingContainer';

export default function HomePage() {
  const logged = isLogged();

  const data = ["1/4/2023","5/5/2023"];

  return (
    <MainLayout>
      {/*
        logged ?
        <UserContainer />
        :
        <HomeContainer />
        */
       <TrackingContainer data={data}/>
      }
    </MainLayout>
  );
}
