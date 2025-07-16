import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

const Navbar2 = dynamic(() => import('../../components/Navbar2/Navbar2'));
const Hero2 = dynamic(() => import('../../components/hero2/Hero2'));
const About2 = dynamic(() => import('../../components/about2/about2'));
const About9 = dynamic(() => import('../../components/about9/About9'));
const ServiceSectionS2 = dynamic(() => import('../../components/ServiceSectionS2/ServiceSectionS2'));
const ChooseSection = dynamic(() => import('../../components/ChooseSection/ChooseSection'));
const BenefitSection = dynamic(() => import('../../components/BenefitSection/BenefitSection'));
const PartnerSection = dynamic(() => import('../../components/PartnerSection/PartnerSection'));
const CtaSection = dynamic(() => import('../../components/CtaSection/CtaSection'));
const InstagramSection = dynamic(() => import('../../components/InstagramSection/InstagramSection'));
const Footer = dynamic(() => import('../../components/footer/Footer'));
const Scrollbar = dynamic(() => import('../../components/scrollbar/scrollbar'));
const ServiceSection = dynamic(() => import('../../components/ServiceSection/ServiceSection'));

const home = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <Hero2 />
                <About2 />
                <PartnerSection />
                <About9 />
                <ServiceSection/>
                {/* <ServiceSectionS2 /> */}
                <ChooseSection />
                <BenefitSection />
                <CtaSection />
                <InstagramSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};

export default home;