import React from 'react'
import Link from 'next/link'
import wimg1 from '/public/images/work/img-1.jpg'
import wimg2 from '/public/images/work/img-2.jpg'
import wimg3 from '/public/images/work/img-3.jpg'
import Image from 'next/image'

const WorkSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="work-section separator-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-12">
                        <div className="heading-title-s2 text-center">
                            <small>What We Do</small>
                            <h2>How we work for solving all <span>business issues</span></h2>
                        </div>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-content">
                        <div className="work-top">
                            <div className="icon">
                                <i className="icon-13"></i>
                            </div>
                            <div className="work-text">
                                <h2>01.</h2>
                                <h3><Link onClick={ClickHandler} href="/service">Business Analytics</Link></h3>
                            </div>
                        </div>
                        <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget
                            egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit
                            amet neque euismod.</p>
                        <p>Suspendisse sit amet neque euismod. Phasellus convallis vulputate euismod. Pellentesque
                            lacinia rutrum libero, sit amet aliquam ante viverra a. Ut sem ipsum, tempor nec rutrum
                            in, gravida eu ipsum.</p>
                    </div>
                    <div className="work-img">
                        <Image src={wimg1} alt=""/>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-content">
                        <div className="work-top">
                            <div className="icon">
                                <i className="icon-16"></i>
                            </div>
                            <div className="work-text">
                                <h2>02.</h2>
                                <h3><Link onClick={ClickHandler} href="/service">Mission & Vision</Link></h3>
                            </div>
                        </div>
                        <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget
                            egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit
                            amet neque euismod.</p>
                        <p>Suspendisse sit amet neque euismod. Phasellus convallis vulputate euismod. Pellentesque
                            lacinia rutrum libero, sit amet aliquam ante viverra a. Ut sem ipsum, tempor nec rutrum
                            in, gravida eu ipsum.</p>
                    </div>
                    <div className="work-img">
                        <Image src={wimg2} alt=""/>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-content">
                        <div className="work-top">
                            <div className="icon">
                                <i className="icon-25"></i>
                            </div>
                            <div className="work-text">
                                <h2>03.</h2>
                                <h3><Link onClick={ClickHandler} href="/service">Our History</Link></h3>
                            </div>
                        </div>
                        <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget
                            egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit
                            amet neque euismod.</p>
                        <p>Suspendisse sit amet neque euismod. Phasellus convallis vulputate euismod. Pellentesque
                            lacinia rutrum libero, sit amet aliquam ante viverra a. Ut sem ipsum, tempor nec rutrum
                            in, gravida eu ipsum.</p>
                    </div>
                    <div className="work-img">
                        <Image src={wimg3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkSection;