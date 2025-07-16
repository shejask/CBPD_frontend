import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import CtaSection from '../../components/CtaSection/CtaSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import About10 from '../../components/about11/about11';
import About11 from '../../components/about11/about11';


const partner = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Become a Partner'} pagesub={'Partner'} Bg={'/images/page-title/bg-2.jpg'} />
                <div className="project-page">
                <About11 />
                </div>
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default partner;


