// components/LoginForm.js
import { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginContent}>
                <div className={styles.welcomeSection}>
                    <h1 className={styles.welcomeTitle}>BEM-VINDO</h1>
                    <p className={styles.welcomeSubtitle}>ao FORENCETOOLS</p>
                </div>
                <div className={styles.loginFormContainer}>
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <h2 className={styles.loginTitle}>Login</h2>
                        <p className={styles.accessSubtitle}>acesso a ferramenta</p>
                        <div className={styles.inputGroup}>
                            <label htmlFor="username" className={styles.label}>email:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password" className={styles.label}>senha:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.input}
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>Logar</button>
                        <p className={styles.registerLink}>cadastre-se</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
