import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('../components/LoginForm'), { ssr: false });
const HomePage = dynamic(() => import('../components/Home'), { ssr: false });
const Header = dynamic(() => import('../components/Header'), { ssr: false });

export default function Index() {
    // Estado para armazenar se o usuário está logado ou não
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        console.log('Componente Index foi renderizado');
    }, []);

    // Função para lidar com a autenticação
    const handleLogin = (username, password) => {
        if (username === 'admin' && password === 'teste') {
            setIsAuthenticated(true);
        } else {
            alert('Usuário ou senha incorretos');
        }
    };

    // Função para lidar com o logout
    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    if (!isClient) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            {isAuthenticated ? (
                <>
                    <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                    <HomePage />
                </>
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </>
    );
}
