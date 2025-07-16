import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import PricingSection from '../../components/PricingSection/PricingSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import CtaSection from '../../components/CtaSection/CtaSection';

const FaqPage = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Pricing Table'} pagesub={'Pricing'} Bg={'/images/page-title/bg-5.jpg'} />
                <div className="team-page">
                    <PricingSection />
                    <PartnerSection/>
                </div>
                <CtaSection/>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default FaqPage;
