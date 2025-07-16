import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import MarqueeSectionS2 from '../../components/MarqueeSectionS2/MarqueeSectionS2';
import CtaSection from '../../components/CtaSection/CtaSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BenefitSection from '../../components/BenefitSection/BenefitSection';

const ServicePageS3 = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Services'} pagesub={'Services'} Bg={'/images/page-title/bg-2.jpg'} />
                <div className="service-page">
                    <MarqueeSectionS2 mClass={'separator-padding'} />
                    <ServiceSectionS3/>
                    <PartnerSection/>
                    <BenefitSection/>
                </div>
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default ServicePageS3;

