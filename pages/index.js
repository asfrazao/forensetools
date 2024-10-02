import { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import HomePage from '../components/Home'; // Página do conteúdo principal
import Header from '../components/Header'; // Header que será exibido após o login

export default function Index() {
    // Estado para armazenar se o usuário está logado ou não
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isClient, setIsClient] = useState(false);

    // Verifica se estamos no cliente
    useEffect(() => {
        setIsClient(true);
        console.log('Componente Index foi renderizado');
    }, []);

    // Função para lidar com a autenticação
    const handleLogin = (username, password) => {
        // Verifica se o usuário e a senha são "admin" e "teste"
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

    // Conteúdo de fallback para renderização inicial
    if (!isClient) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            {/* Se o usuário estiver autenticado, exibe o Header e o conteúdo principal. Caso contrário, exibe a tela de login */}
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
