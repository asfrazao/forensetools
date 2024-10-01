// src/ComparadorDeImagens.js
import React, { useState, useEffect } from 'react';

function ComparadorDeImagens() {
    const [result, setResult] = useState(null);

    useEffect(() => {
        // Automaticamente buscar as imagens da pasta local
        const fetchAndCompareImages = async () => {
            const formData = new FormData();
            formData.append('image1', '/local-images/image1.jpg');
            formData.append('image2', '/local-images/image2.jpg');

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

        fetchAndCompareImages();
    }, []);

    return (
        <div className="comparador-container">
            <h1>Comparador de Imagens</h1>
            {result && (
                <div className={`result ${result.type}`}>
                    {result.message}
                </div>
            )}
        </div>
    );
}

export default ComparadorDeImagens;
