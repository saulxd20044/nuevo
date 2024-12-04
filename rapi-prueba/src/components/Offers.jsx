import React from 'react';
import inversion from '../images/inversion.jpg';
import bolsillo from '../images/bolsillo.jpg';
import crecimiento from '../images/crecimiento.jpg';

function Offers() {
    return (
        <section className="section offer" aria-label="offer">
          <div className="container">
            <ul className="grid-list">
              <li>
                <div
                  className="offer-card has-bg-image img-holder"
                  style={{
                    backgroundImage: `url(${inversion})` ,
                    "--width": "540",
                    "--height": "374"
                  }}
                >
                  <p className="card-subtitle">Siempre seguros.</p>

                  <h3 className="h3 card-title">
                    Inversiones para <span className="span">tu futuro</span>
                  </h3>

                  <a href="#" className="btn">Leer más</a>
                </div>
              </li>

              <li>
                <div
                  className="offer-card has-bg-image img-holder"
                  style={{
                    backgroundImage: `url(${bolsillo})` ,
                    "--width": "540",
                    "--height": "374"
                  }}
                >
                  <p className="card-subtitle">Ahorra</p>

                  <h3 className="h3 card-title">
                    Llena tus bolsillos de <span className="span">oportunidades</span>
                  </h3>

                  <a href="#" className="btn">Leer más</a>
                </div>
              </li>

              <li>
                <div
                  className="offer-card has-bg-image img-holder"
                  style={{
                    backgroundImage: `url(${crecimiento})` ,
                    "--width": "540",
                    "--height": "374"
                  }}
                >
                  <p className="card-subtitle">Expande</p>

                  <h3 className="h3 card-title">
                    Crecimiento en todas las <span className="span">formas</span>
                  </h3>

                  <a href="#" className="btn">Leer más</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
    );
}

export default Offers;
