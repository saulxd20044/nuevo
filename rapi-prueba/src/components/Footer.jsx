import React from "react";
import { IonIcon } from '@ionic/react';
import { locationOutline, callOutline, logoFacebook, logoTwitter, logoPinterest, logoInstagram } from 'ionicons/icons';
import footerImage from '../images/footer-bg.jpg';

function Footer() {
    return (
        <footer
            className="footer"
            style={{ backgroundImage: `url(${footerImage})` }}
            id="footer"
        >
            <div className="footer-top section">
                <div className="container">
                    <div className="footer-brand">
                        <a href="#" className="logo">RAPI CASH</a>

                        <p className="footer-text">
                            Si tiene alguna duda, contáctese a
                            <a href="mailto:support@gmail.com" className="link"> support@RapiCash.com</a>
                        </p>

                        <ul className="contact-list">
                            <li className="contact-item">
                                <IonIcon icon={locationOutline} aria-hidden="true"></IonIcon>
                                <address className="address">Dirección, Paseo de la República N° 356, Oficina, 702 San Isidro, Lima</address>
                            </li>

                            <li className="contact-item">
                                <IonIcon icon={callOutline} aria-hidden="true"></IonIcon>
                                <a href="tel:+16234567891011" className="contact-link">(+51) 999 999 999</a>
                            </li>
                        </ul>

                        <ul className="social-list">
                            <li>
                                <a href="#" className="social-link">
                                    <IonIcon icon={logoFacebook}></IonIcon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <IonIcon icon={logoTwitter}></IonIcon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <IonIcon icon={logoPinterest}></IonIcon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <IonIcon icon={logoInstagram}></IonIcon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        &copy; 2024 Hecho por
                        <a href="#" className="copyright-link">Nosotros</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;