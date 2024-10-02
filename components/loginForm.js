// components/loginForm.js
import { useState } from 'react';
import styles from '../styles/loginForm.module.css';

const LoginForm = ({ onLogin }) => {
    // Estado para armazenar valores de nome de usuário e senha
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Função para lidar com o envio do formulário de login
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se a função `onLogin` foi passada e é válida
        if (typeof onLogin !== 'function') {
            console.error('onLogin não é uma função válida');
            return;
        }

        // Chama a função `onLogin` passando os valores de nome de usuário e senha
        onLogin(username, password);
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginContent}>
                {/* Seção de boas-vindas */}
                <div className={styles.welcomeSection}>
                    <h1 className={styles.welcomeTitle}>BEM-VINDO</h1>
                    <p className={styles.welcomeSubtitle}>ao</p>
                    <p className={styles.welcomeSubtitle}>FORENSETOOLS</p>
                </div>

                {/* Seção do formulário de login */}
                <div className={styles.loginFormContainer}>
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <h2 className={styles.loginTitle}>Login</h2>
                        <p className={styles.accessSubtitle}>acesso a ferramenta</p>

                        {/* Campo para o nome de usuário */}
                        <div className={styles.inputGroup}>
                            <label htmlFor="username" className={styles.label}>email:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={styles.input}
                                required
                            />
                        </div>

                        {/* Campo para a senha */}
                        <div className={styles.inputGroup}>
                            <label htmlFor="password" className={styles.label}>senha:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.input}
                                required
                            />
                        </div>

                        {/* Botão de login */}
                        <button type="submit" className={styles.submitButton}>Logar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
