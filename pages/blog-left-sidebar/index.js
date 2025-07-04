import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import Navbar2 from '../../components/Navbar2/Navbar2.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import BlogList from '../../components/BlogList/BlogList.js';
import CtaSection from '../../components/CtaSection/CtaSection.js';

const BlogPageLeft = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} Bg={'/images/page-title/bg-1.jpg'} />
                <BlogList blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default BlogPageLeft;