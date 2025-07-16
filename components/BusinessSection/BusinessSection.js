import React from 'react'
import abimg from '/public/images/choose/img-3.jpg'
import VideoModal from '../ModalVideo/VideoModal'
import Image from 'next/image'

const BusinessSection = (props) => {
    return (
        <section className="business-section"
            style={{ backgroundImage: `url(${'/images/choose/bg.jpg'})` }}>
            <div className="container">
                <div className="business-wrap">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-12">
                            <div className="heading-title-s3 text-center">
                                <small>Who We Are</small>
                                <h2>How we work for solving all <span>business issues</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="business-bottom-img">
                        <Image src={abimg} alt="" />
                        <div className="video-btn-wrap">
                            <VideoModal />
                        </div>
                        <div className="rotate-outer">
                            <div className="rotate-text-wrap">
                                <div className="rotate-text text-roted">
                                    <svg width="200" height="200">
                                        <path fill="white" d="M0,100a100,100 0 1,0 200,0a100,100 0 1,0 -200,0" />
                                        <path fill="none" id="innerCircle" d="M10,100a90,90 0 1,0 180,0a90,90 0 1,0 -180,0" />
                                        <text>
                                            <textPath href="#innerCircle" className="qr--label">
                                                Years Experience Years Experience
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="icon"><i className="icon-22"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessSection;