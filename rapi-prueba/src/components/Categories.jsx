import React from 'react';
import FormularioEvaluacion from './FormularioEvaluacion';
import SimuladorPrestamo from './SimuladorPrestamo';

function Categories() {
    const categoryCardStyle = {
        borderRadius: '10px',
        boxShadow: '0 10px 8px rgba(82, 183, 136, 0.5)',
        padding: '24px', // equivalente a p-6 en Tailwind
        backgroundColor: 'white',
        transition: 'transform 0.2s ease-in-out',
    };

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10rem', // equivalente a gap-6 en Tailwind
        justifyContent: 'center',
    };

    return (
        <main>
            <section className="section category" aria-label="category" id="categories">
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="h2 section-title text-center mb-8">
                        <span className="span">Conoce más</span> sobre Nuestros Servicios
                    </h2>

                    <ul style={containerStyle}>
                        <li style={{ width: '100%', maxWidth: '400px', padding: '10px' }}>
                            <div
                                style={categoryCardStyle}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <FormularioEvaluacion />
                            </div>
                        </li>

                        <li style={{ width: '100%', maxWidth: '400px', padding: '16px' }}>
                            <div
                                style={categoryCardStyle}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <SimuladorPrestamo />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Categories;