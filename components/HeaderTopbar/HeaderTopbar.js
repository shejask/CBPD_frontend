import React from 'react'
import Link from 'next/link'


const HeaderTopbar = () => {
    return (
        <section className="topbar">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-lg-2 col-md-12 col-12">
                        <div className="contact-info social">
                            <ul>
                                <li><Link href="/"><i className="icon-35"></i></Link></li>
                                <li><Link href="/"><i className="icon-34"></i></Link></li>
                                <li><Link href="/"><i className="icon-33"></i></Link></li>
                                <li><Link href="/"><i className="icon-32"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="icon-31"></i> Get quick appointment and technical support: <Link href="/">+(123) 456-7890</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="icon-29"></i> 684 West College St. Sun City, USA</li>
                                <li><i className="icon-30"></i> lawson@example.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderTopbar;