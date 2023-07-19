import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title">Vitaliy A.</h2>

                <ul className="footer__list">
                    <li>
                        <a href="#about"
                           className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio"
                           className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#" className="footer__link"></a>
                    </li>

                    <li>
                        <a href="#qualification"
                           className="footer__link">Qualification</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://t.me/mega_dizel" className="home__social-icon" target="_blank">
                        <i className='bx bxl-telegram'></i>
                    </a>

                    <a href="https://www.linkedin.com/in/vitaliy-akhmedzyanov-496b87238/" className="home__social-icon" target="_blank">
                        <i className='bx bxl-linkedin'></i>
                    </a>

                    <a href="https://github.com/MegaDizel" className="home__social-icon" target="_blank">
                        <i className='bx bxl-github'></i>
                    </a>
                </div>

                <span className="footer__copy">Open Source</span>
            </div>
        </footer>
    );
};

export default Footer;