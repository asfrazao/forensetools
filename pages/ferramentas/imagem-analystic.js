// pages/ferramentas/imagem-analystic.js
import React, { useState } from 'react';

const ImagemAnalystic = () => {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [result, setResult] = useState(null);

    const handleImage1Change = (e) => {
        setImage1(e.target.files[0]);
    };

    const handleImage2Change = (e) => {
        setImage2(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image1 || !image2) {
            alert('Por favor, selecione as duas imagens.');
            return;
        }

        const formData = new FormData();
        formData.append('image1', image1);
        formData.append('image2', image2);

        try {
            const response = await fetch('http://localhost:3000/compare-images', {
                method: 'POST',
                body: formData,
            });

            const resultData = await response.json();
            const matchResult = resultData.matchedFaces[0]?.matchResult;

            if (matchResult === 1) {
                setResult({ message: 'IMAGENS COMPATÍVEIS', type: 'success' });
            } else {
                setResult({ message: 'IMAGENS INCOMPATÍVEIS', type: 'error' });
            }
        } catch (error) {
            console.error('Erro ao enviar as imagens:', error);
            setResult({ message: 'Erro ao comparar as imagens.', type: 'error' });
        }
    };

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Comparador de Imagens</h1>
            <form onSubmit={handleSubmit} style={{ margin: '2rem auto', maxWidth: '500px' }}>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="image1">Selecione a Imagem 1:</label>
                    <input type="file" id="image1" onChange={handleImage1Change} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="image2">Selecione a Imagem 2:</label>
                    <input type="file" id="image2" onChange={handleImage2Change} />
                </div>
                <button type="submit" style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#f4a460',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                }}>
                    Comparar Imagens
                </button>
            </form>
            {result && (
                <div style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    backgroundColor: result.type === 'success' ? '#d4edda' : '#f8d7da',
                    color: result.type === 'success' ? '#155724' : '#721c24',
                    borderRadius: '5px'
                }}>
                    {result.message}
                </div>
            )}
        </div>
    );
};

export default ImagemAnalystic;
