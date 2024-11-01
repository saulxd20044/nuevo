import React from "react";
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';

function Brand() {
    return (
        <section className="section brand" aria-label="brand">
            <div className="container">
                <h2 className="h2 section-title">
                    <span className="span">Cómo </span>invertir
                </h2>

                <ul className="has-scrollbar">
                    <li className="scrollbar-item">
                        <div
                            className="brand-card img-holder"
                            style={{ width: 150, height: 150 }}
                        >
                            <img
                                src={image1}
                                width="150"
                                height="150"
                                loading="lazy"
                                alt="brand logo"
                                className="img-cover"
                            />
                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div
                            className="brand-card img-holder"
                            style={{ width: 150, height: 150 }}
                        >
                            <img
                                src={image2}
                                width="150"
                                height="150"
                                loading="lazy"
                                alt="brand logo"
                                className="img-cover"
                            />
                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div
                            className="brand-card img-holder"
                            style={{ width: 150, height: 150 }}
                        >
                            <img
                                src={image3}
                                width="150"
                                height="150"
                                loading="lazy"
                                alt="brand logo"
                                className="img-cover"
                            />
                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div
                            className="brand-card img-holder"
                            style={{ width: 150, height: 150 }}
                        >
                            <img
                                src={image4}
                                width="150"
                                height="150"
                                loading="lazy"
                                alt="brand logo"
                                className="img-cover"
                            />
                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div
                            className="brand-card img-holder"
                            style={{ width: 150, height: 150 }}
                        >
                            <img
                                src={image5}
                                width="150"
                                height="150"
                                loading="lazy"
                                alt="brand logo"
                                className="img-cover"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Brand;