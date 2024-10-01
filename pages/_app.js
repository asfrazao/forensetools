// frontend/pages/_app.js
import '../styles/globals.css'; // Estilos globais
import '../styles/Header.css';  // Importe o CSS do Header aqui
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using Next.js" />
                <title>ForenseTools</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
