import HomeContainer from '~/containers/HomeContainer';
import MainLayout from '~/layout/MainLayout';
import getUser from './api/myAuth/getUser';
import UserContainer from '~/containers/UserContainer';
import LoadingContainer from '~/containers/LoadingContainer';

export default function HomePage() {
      const {session} = getUser();
  
  return (
    <MainLayout>
      { session ?
      <UserContainer />
      :
      <HomeContainer />
      }
    </MainLayout>
  );
}
