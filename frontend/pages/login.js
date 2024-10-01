// pages/login.js
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

export default function Login() {
    return (
        <>
            <Header />
            <main className="login-page min-h-screen bg-gray-100 flex items-center justify-center">
                <LoginForm />
            </main>
        </>
    );
}
