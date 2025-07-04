import React from 'react';
import Image from 'next/image';
import aboutImg from '/public/images/about/about-us-12.jpg'

const About10 = () => {
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
                            <p>In today’s competitive world, gaining international recognition in your profession is crucial for career growth and success. The Council for Business and Professional Development (CBPD) is dedicated to providing global accreditation for professionals across various industries, ensuring that their expertise is recognized at every level. By emphasizing practical experience, professional mastery, and academic relevance, CBPD offers a streamlined and cost-effective approach to building a globally competitive career profile. One of the key advantages of CBPD is its affordability and efficiency. Unlike traditional certification paths that require extensive time and financial investment, CBPD provides a shorter, more direct route to professional success. Through its accreditation system, professionals can connect with global scholars, expand their knowledge, and enhance their industry presence. This not only fosters international career opportunities but also allows individuals to position themselves as experts in their respective fields. At CBPD, we firmly believe that professional excellence is built on dedication, integrity, and expertise. A strong commitment to one’s profession, coupled with in-depth knowledge and institutional loyalty, naturally earns peer recognition and industry respect. We empower individuals by equipping them with the necessary credentials to boost their self-confidence, increase their earning potential, and achieve career milestones with distinction. Choosing CBPD means choosing a faster, more affordable, and globally recognized route to professional success. Join us today and take the next step toward an internationally accredited career!</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About10;