import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Hero2 from '../../components/hero2/Hero2';
import About2 from '../../components/about2/about2';
import About9 from '../../components/about9/About9';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import BenefitSection from '../../components/BenefitSection/BenefitSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import InstagramSection from '../../components/InstagramSection/InstagramSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage2 = () => {
    return (
        <Fragment>            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <Hero2 />
                <About2 />
                <PartnerSection />
                <About9 />
                <ServiceSection />
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
export default HomePage2;