import React from 'react';
import moneyImage from '../images/money.jpg'; // Asegúrate de que la ruta sea correcta

function Hero() {
    return (
        <main>

            <article>
                <section
                    className="section hero has-bg-image"
                    id="home"
                    aria-label="home"
                    style={{ backgroundImage: `url(${moneyImage})` }}
                >
                    <div className="container">
                        <h1 className="h1 hero-title" style={{ fontFamily: 'Bangers', color: 'rgba(51, 42, 42, 0.952)' }}>
                            RAPI CASH
                        </h1>
                        <p className="hero-text" style={{
                            fontFamily: 'Nunito Sans, sans-serif',
                            fontStyle: "italic",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            Tu mejor opción financiera
                        </p>

                        <a href="#" className="btn">Conviértete en un "RAPI CASH" ahora</a>
                    </div>
                </section>
            </article>
        </main>
    );
}
export default Hero;
