import React from 'react';
import Image from 'next/image';
import aboutImg from '/public/images/about/about-us-8.jpg'

const About9 = () => {
    return (
               <div className="team-single-page separator-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4">
                        <div className="team-single-sidebar">                                 <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
                                    <Image 
                                        src={aboutImg} 
                                        alt="CBPD Accreditation" 
                                        width={800}
                                        height={500}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                         </div>
                    </div>
                    <div className="col-xl-7 offset-xl-1 col-lg-8">
                        <div className="team-single-content">
                            <h2>CBPD Accreditation for <br /> Training and Events</h2>
                            <p>Central Board of Professional Development (CBPD) offers a diverse range of courses across multiple disciplines, developed and delivered through well-structured partnerships with accredited education providers. Course allocation is determined based on institutional requirements and the availability of necessary infrastructure. Each program is expertly designed to match students’ learning capacity, emphasizing holistic development through soft skills and personality enhancement—allowing learners to progress at their own pace </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About9;
