import Head from "next/head";
import ForgotPasswordContainer from "~/containers/FogotPasswordContainer";

export default function LoginPage() {
    return (
    <>
    <Head>
        <title> Fogot Password | DigitalTrendZ | AGU</title>
    </Head>
        <ForgotPasswordContainer />
    </>
    );
}