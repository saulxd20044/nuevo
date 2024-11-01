import React from "react";
import aprobado from '../images/aprobado.jpg';
import asistencia from '../images/asistencia.jpg';
import seguridad from '../images/seguridad.jpg';
import periodo from '../images/periodo.jpg';



function Service(){
     return (
        <section className="section service" aria-label="service">
          <div className="container">
            <h2 className="h2 section-title">
              <span className="span">El dinero que necesitas,</span> cuando lo
              necesitas.
            </h2>

            <ul className="grid-list">
              <li>
                <div className="service-card">
                  <figure className="card-icon">
                    <img
                      src={aprobado}
                      width="70"
                      height="70"
                      loading="lazy"
                      alt="service icon"
                    />
                  </figure>

                  <h3 className="h3 card-title">Aprobación el mismo día</h3>

                  <p className="card-text">
                    Solicite antes de las 14:00 (hora local) para obtener la aprobación de préstamos de S/3500+ hoy mismo.
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <figure className="card-icon">
                    <img
                      src={asistencia}
                      width="70"
                      height="70"
                      loading="lazy"
                      alt="service icon"
                    />
                  </figure>

                  <h3 className="h3 card-title">Período de gracia de 30 días</h3>

                  <p className="card-text">
                    35% de descuento en su primer préstamo más 5% de descuento en todos los préstamos futuros.
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <figure className="card-icon">
                    <img
                      src={seguridad}
                      width="70"
                      height="70"
                      loading="lazy"
                      alt="service icon"
                    />
                  </figure>

                  <h3 className="h3 card-title">Transacciones seguras</h3>

                  <p className="card-text">
                    25% de descuento en su inversión online de S/5000+. Disponible en la mayoría de los productos financieros.
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <figure className="card-icon">
                    <img
                      src={periodo}
                      width="70"
                      height="70"
                      loading="lazy"
                      alt="service icon"
                    />
                  </figure>

                  <h3 className="h3 card-title">Asistencia 24/7</h3>

                  <p className="card-text">
                    Solicite en línea y reciba sus préstamos superiores a S/3500 de forma rápida y segura.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
     );
}
export default Service;
