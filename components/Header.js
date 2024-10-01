// components/Header.js
import Link from 'next/link';

const Header = ({ isAuthenticated, onLogout }) => {
    return (
        <header className="header bg-white shadow-md py-4 px-8">
            <div className="container flex items-center justify-between mx-auto">
                <div className="logo text-left">
                    <h1 className="text-2xl font-bold">
                        PERICIA JUDICIAL<span className="text-orange-500">PRO</span>
                    </h1>
                </div>
                <nav className="nav-menu flex-1 text-center">
                    <ul className="nav-links inline-flex space-x-8">
                        <li><Link href="/public" className="hover:text-orange-500 font-bold uppercase">Home</Link></li>
                        <li className="group relative">
                            <Link href="/ferramentas" className="hover:text-orange-500 font-bold uppercase">
                                Ferramentas
                            </Link>
                            <ul className="submenu hidden group-hover:block absolute left-0 top-full mt-2 bg-white shadow-md border rounded-md z-10">
                                <li>
                                    <Link href="/ferramentas/imagem-analystic" className="block px-4 py-2 hover:bg-gray-100">
                                        ImagemAnalystic
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="/servicos" className="hover:text-orange-500 font-bold uppercase">Serviços</Link></li>
                        <li><Link href="/sobre-nos" className="hover:text-orange-500 font-bold uppercase">Sobre Nós</Link></li>
                        <li><Link href="/contatos" className="hover:text-orange-500 font-bold uppercase">Contatos</Link></li>
                    </ul>
                </nav>
                {isAuthenticated && (
                    <div className="login-button">
                        <button
                            onClick={onLogout}
                            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-bold uppercase"
                        >
                            Sair
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
