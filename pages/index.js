import HomeContainer from '~/containers/HomeContainer';
import MainLayout from '~/layout/MainLayout';
import { useSession } from 'next-auth/react';
import UserContainer from '~/containers/UserContainer';
import LoadingContainer from '~/containers/LoadingContainer';

export default function HomePage() {

  const {data: session, status} = useSession();
      
  
  return (
    <MainLayout>
      {status === "loading" ?
      <LoadingContainer />
      : session ? 
      <UserContainer />
      :
      <HomeContainer />
      }
    </MainLayout>
  );
}
