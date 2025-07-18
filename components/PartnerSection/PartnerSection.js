import React from "react";
import Image from "next/image";
import styles from './PartnerSection.module.css';

import pimg1 from '/public/images/partners/1.png'
import pimg2 from '/public/images/partners/2.png'
import pimg3 from '/public/images/partners/3.png'
import pimg4 from '/public/images/partners/4.png'
import pimg5 from '/public/images/partners/5.png'
import pimg6 from '/public/images/partners/6.png'
import pimg7 from '/public/images/partners/7.png'
import pimg8 from '/public/images/partners/8.png'
import pimg9 from '/public/images/partners/9.png'
import pimg10 from '/public/images/partners/10.png'
import pimg11 from '/public/images/partners/11.png'
import pimg12 from '/public/images/partners/12.png'
import pimg13 from '/public/images/partners/13.png'
import pimg14 from '/public/images/partners/14.png'     
import pimg15 from '/public/images/partners/15.png'
import pimg16 from '/public/images/partners/16.png'
import pimg17 from '/public/images/partners/17.png'
import pimg18 from '/public/images/partners/18.png' 
import pimg19 from '/public/images/partners/19.png'
import pimg20 from '/public/images/partners/20.png'
import pimg21 from '/public/images/partners/21.png'     
import pimg22 from '/public/images/partners/22.png'
import pimg23 from '/public/images/partners/23.png' 


const partners = [
    { pImg: pimg1 },
    // pimg2 hidden
    // pimg3 hidden
    { pImg: pimg4 },
    { pImg: pimg5 },
    // pimg6 hidden
    // pimg7 hidden
    // pimg8 hidden
    // pimg9 hidden
    // pimg10 hidden
    // pimg11 hidden
    // pimg12 hidden
    // pimg13 hidden
    { pImg: pimg14 },
    { pImg: pimg15 },
    { pImg: pimg16 },
    { pImg: pimg17 },
    // pimg18 hidden
    { pImg: pimg19 },
    // pimg20 hidden
    // pimg21 hidden
    { pImg: pimg22 },
    { pImg: pimg23 }
];

const PartnerSection = (props) => {
    const [currentPartners, setCurrentPartners] = React.useState([]);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        // Function to get next 9 partners
        const getNextPartners = (startIndex) => {
            const endIndex = startIndex + 9;
            let selectedPartners = [];
            
            // If we need to wrap around to the beginning
            if (endIndex > partners.length) {
                const remainingCount = endIndex - partners.length;
                selectedPartners = [
                    ...partners.slice(startIndex),
                    ...partners.slice(0, remainingCount)
                ];
            } else {
                selectedPartners = partners.slice(startIndex, endIndex);
            }
            
            return selectedPartners;
        };

        // Initial set of partners
        setCurrentPartners(getNextPartners(0));

        // Set up the interval
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 9) % partners.length;
                setCurrentPartners(getNextPartners(nextIndex));
                return nextIndex;
            });
        }, 3000); // Change every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="partner-section">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="partner-left">
                            <div className="heading-title">
                                <small>Trusted Best Company</small>
                                <h2>Let's find out our   <span>global partners.</span></h2>
                                <p>We collaborate with leading institutions and global organizations to drive innovation, education, and impactful solutions across the world</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="partner-wrap">
                            {currentPartners.map((partner, pitem) => (
                                <div className="partner-item flex items-center justify-center" key={`${currentIndex}-${pitem}`}>
                                    <i><Image 
                                        src={partner.pImg} 
                                        alt="" 
                                        width={150}
                                        height={150}
                                        className=""
                                    /></i>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;