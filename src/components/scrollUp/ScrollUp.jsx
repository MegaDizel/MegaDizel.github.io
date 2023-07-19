import React from 'react';
import "./scrollUp.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function (){
        const scrollUP = document.querySelector(".scrollUp");
        if (this.scrollY >= 560) scrollUP.classList.add("show-scroll");
        else scrollUP.classList.remove("show-scroll");
    });
    return (
        <a href="#" className="scrollUp">
            <i className="uil uil-arrow-up scrollUp__icon"></i>
        </a>
    );
};

export default ScrollUp;