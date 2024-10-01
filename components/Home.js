// components/Home.js
import React from 'react';

const HomePage = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '2rem',
            boxSizing: 'border-box',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Bem-vindo ao ForenseTools!</h1>
        </div>
    );
};

export default HomePage;
