import React from "react";

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
                                src="./assets/images/brand-1.jpg"
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
                                src="./assets/images/brand-2.jpg"
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
                                src="./assets/images/brand-3.jpg"
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
                                src="./assets/images/brand-4.jpg"
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
                                src="./assets/images/brand-5.jpg"
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