import Head from 'next/head';
import LoginContainer from '~/containers/LoginContainer';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title> Login | DigitalTrendZ | AGU</title>
      </Head>
      <LoginContainer />
    </>
  );
}