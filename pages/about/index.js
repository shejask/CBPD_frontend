import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import BenefitSection from '../../components/BenefitSection/BenefitSection';
import GraphSectionS2 from '../../components/GraphSectionS2/GraphSectionS2';
import WorkSection from '../../components/WorkSection/WorkSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import FunFact from '../../components/FunFact/FunFact';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import About5 from '../../components/about5/about5';
import About10 from '../../components/about10/about10';



const AboutPage = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'About Us'} pagesub={'About'} Bg={'/images/page-title/bg-1.jpg'} />
                <div className="about-page">
                    <About5 />
                                        <About10 />

                    {/* <BenefitSection /> */}
                    {/* <GraphSectionS2 />
                    <WorkSection />
                    <TeamSection /> */}
                    {/* <FunFact /> */}
                    <CtaSection />
                </div>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default AboutPage;
