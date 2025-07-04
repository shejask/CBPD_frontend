import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Error from '../../components/404/404'
import CtaSection from '../../components/CtaSection/CtaSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ErrorPage =() => {
    return(
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Error 404'} pagesub={'404'} Bg={'/images/page-title/bg-8.jpg'} />
                <Error/>
                <CtaSection/>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default ErrorPage;

