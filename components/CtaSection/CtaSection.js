import React from 'react'
import Link from 'next/link'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const CtaSection = (props) => {
    return (
        <section className="cta-section separator-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-12">
                        <div className="cta-title">
                            <h2>Join CBPD and Redefine Your Professional Journey</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                        <div className="cta-btn">
                            <Link onClick={ClickHandler} href="/contact" className="btn-style-1">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;