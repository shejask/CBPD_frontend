import React from "react";
import chimg from '/public/images/choose/img-4.jpg'
import chimg2 from '/public/images/choose/img-5.jpg'
import Image from "next/image";

const ChooseSectionS2 = () => {
    return (
        <section className="choose-section separator-padding style-3" style={{ backgroundImage: `url(${'/images/choose/bg2.jpg'})` }}>
            <div className="container">
                <div className="choose-wrap">
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <div className="choose-items">
                                <div className="heading-title-s3">
                                    <small>Why Choose Us</small>
                                    <h2>Excellent For Batter Business <span>Solutions</span></h2>
                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula,
                                        eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante.
                                        Suspendisse sit amet neque euismod, convallis quam eget.</p>
                                </div>
                                <div className="choose-list">
                                    <ul>
                                        <li><i className="icon-18"></i>Data-Driven Decision Making</li>
                                        <li><i className="icon-18"></i>Environmental and Social</li>
                                        <li><i className="icon-02"></i>Innovation and Competitive</li>
                                        <li><i className="icon-18"></i>Risk Mitigation</li>
                                        <li><i className="icon-18"></i>Cost Reduction</li>
                                        <li><i className="icon-18"></i>Increased Revenue</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-right-wrap">
                <div className="choose-img">
                    <Image src={chimg} alt="" />
                    <div className="flot-img"><Image src={chimg2} alt="" /></div>
                </div>
            </div>
        </section>
    );
}

export default ChooseSectionS2;