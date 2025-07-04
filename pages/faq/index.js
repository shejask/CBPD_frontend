import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import FaqSection from '../../components/FaqSection/FaqSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import CtaSection from '../../components/CtaSection/CtaSection';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

const FaqPage = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'FAQ'} pagesub={'FAQ'} Bg={'/images/page-title/bg-5.jpg'} />
                <div className="faq-page">
                    <FaqSection />
                </div>
                <ChooseSection />
                <ProjectSection />
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default FaqPage;
