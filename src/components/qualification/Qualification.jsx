import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] =useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey
            </span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button  button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap
                        qualifications__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button  button--flex"
                        }
                         onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt
                        qualifications__icon"></i>{" "}
                        Projects
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={toggleState  === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                        }

                    >
                        <div className="qualification__data">
                            <div>
                            <h3 className="qualification__title">Civil servant</h3>
                            <span className="qualification__subtitle">RANEPA</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2016-2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Civil Servant</h3>
                                <span className="qualification__subtitle">Municipality</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2022-present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web develop</h3>
                                <span className="qualification__subtitle">Self-study</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2022-present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Self-study</h3>
                                <span className="qualification__subtitle">Different websites</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2022-present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={toggleState  === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product design</h3>
                                <span className="qualification__subtitle">Self</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2022-Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX -designer</h3>
                                <span className="qualification__subtitle">Different things</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2022-present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web designer</h3>
                                <span className="qualification__subtitle">Self-made</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i> 2016-2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;