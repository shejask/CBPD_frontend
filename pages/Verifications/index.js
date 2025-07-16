import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Verificationscomp from '../../components/Verificationscomp/Verificationscomp';
import CtaSection from '../../components/CtaSection/CtaSection';


const verifications = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2  hclass={'header-style-2'} />
                 <PageTitle pageTitle={'Verification Portal'} pagesub={'Verify Certificates & Memberships'} Bg={'/images/page-title/bg-9.jpg'} />

                <Verificationscomp />

                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default verifications;

