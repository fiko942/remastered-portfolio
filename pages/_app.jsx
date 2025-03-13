import Head from "next/head";
import "../styles/globals.css"; // Pastikan ada file CSS untuk styling global
import Container from "../component/Container";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Wiji's Portfolio</title>
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            </Head>
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    );
}
