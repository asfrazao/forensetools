import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header'; // Certifique-se de que o caminho está correto
import Home from './home';
import ComparadorDeImagens from './comparadorDeImagens';
import Login from '../pages/login';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/comparador" element={<ComparadorDeImagens />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
