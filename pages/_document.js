// frontend/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using Next.js" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}

