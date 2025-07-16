import React from 'react'
import Link from 'next/link'
import errorImg from '/public/images/404.png'
import Image from 'next/image'

const Error = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="opps-404-section separator-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={errorImg} alt=""/>
                            </div>
                            <div className="opps-message">
                                <h3>Oops! Page Not Found!</h3>
                                <p>The requested URL was not found on this server. This might be
                                    because you have typed the web address incorrectly.</p>
                                <Link onClick={ClickHandler} href="/home" className="btn-style-2">Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;