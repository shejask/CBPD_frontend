import React from 'react'
import VideoModal from '../ModalVideo/VideoModal';
import arrow from '/public/images/arrow.png'
import Image from 'next/image';

const VideoSection = (props) => {
    return (
        <section className="video-section separator-padding pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-7 col-12">
                        <div className="heading-title">
                            <small>Who We Are</small>
                            <h2>How we work for solving all <span>business issues</span></h2>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-5 col-12">
                        <div className="video-text">
                            <p>Transforming ideas into user-friendly and visually appealing websites Accounting and
                                Bookkeeping. Pellentesque lacinia rutrum libero.</p>
                        </div>
                    </div>
                </div>
                <div className="video-wrap" style={{ backgroundImage: `url(${'/images/video-bg.jpg'})` }}>
                    <h2>VIDEO</h2>
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-8 col-12">
                            <div className="skill-section">
                                <div className="skill-progress">
                                    <div className="progress-single">
                                        <h5 className="progress-title">Professionality</h5>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "90%" }}
                                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                        <span className="progress-number">90%</span>
                                    </div>

                                    <div className="progress-single">
                                        <h5 className="progress-title">Client Service</h5>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "95%" }}
                                                aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                        <span className="progress-number">95%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4 col-12">
                            <div className="video-btn-wrap">
                                <VideoModal/>
                                <div className="shape"><Image src={arrow} alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video-btm-text">
                    <div className="row">
                        <div className="col-lg-5">
                            <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget
                                egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit
                                amet neque euismod,</p>
                        </div>
                        <div className="col-lg-5 offset-lg-2">
                            <p>Netus et malesuada fames ac turpis egestas. Integer nec quam ut tortor efficitur
                                lentesque lacinia rutrum libero, sit amet aliquam ante viverra a. Ut sem ipsum, tempor
                                nec.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection;