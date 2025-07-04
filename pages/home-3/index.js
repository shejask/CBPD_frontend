import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import Hero3 from '../../components/hero3/Hero3';
import About3 from '../../components/about3/about3';
import BusinessSection from '../../components/BusinessSection/BusinessSection';
import Features from '../../components/Features/Features';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import ChooseSectionS2 from '../../components/ChooseSectionS2/ChooseSectionS2';
import ProjectSection3 from '../../components/ProjectSection3/ProjectSection3';
import GraphSection from '../../components/GraphSection/GraphSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import ContactSectionS2 from '../../components/ContactSectionS2/ContactSectionS2';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage3 = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-3'}/>
                <Hero3 />
                <BusinessSection />
                <Features featuresClass={'s2'}/>
                <About3 />
                <ProjectSection3 />
                <ServiceSectionS3 />
                <ChooseSectionS2 />
                <GraphSection />
                <PartnerSection />
                <PricingSection />
                <ContactSectionS2 />
                <BlogSectionS2 />
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage3;