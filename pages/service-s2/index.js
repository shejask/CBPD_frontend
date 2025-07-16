import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import MarqueeSectionS2 from '../../components/MarqueeSectionS2/MarqueeSectionS2';
import CtaSection from '../../components/CtaSection/CtaSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BenefitSection from '../../components/BenefitSection/BenefitSection';

const ServicePage = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Programs'} pagesub={'Programs'} Bg={'/images/page-title/bg-2.jpg'} />
                <div className="service-page">
                     <ServiceSection/>
                 </div>
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default ServicePage;

