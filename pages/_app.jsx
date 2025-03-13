import Head from "next/head";
import "../styles/globals.css"; // Pastikan ada file CSS untuk styling global
import Container from "../component/Container";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Wiji's Portfolio</title>
            </Head>
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    );
}
