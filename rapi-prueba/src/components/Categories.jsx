import React from 'react';
import { Link } from 'react-router-dom';
function Categories() {
    return (
        <main>
            <article>
                <section
                    className="section category" aria-label="category" id="categories"
                >
                    <div className="container">
                        <h2 className="h2 section-title">
                            <span className="span">Conoce más</span> sobre Nuestros Servicios
                        </h2>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/form" className="btn">Evaluación de Servicios</Link>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}

export default Categories;
