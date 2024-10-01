// frontend/pages/_app.js
import '../styles/globals.css'; // Estilos globais
import '../styles/Header.css';  // Importe o CSS do Header aqui
import '../styles/LoginForm.module.css'; // Estilos do LoginForm

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}