import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import Navbar2 from '../../components/Navbar2/Navbar2.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import BlogGridS2 from '../../components/BlogGridS2/BlogGridS2.js';
import CtaSection from '../../components/CtaSection/CtaSection.js';

const BlogPageS2 = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} Bg={'/images/page-title/bg-1.jpg'} />
                <div className="blog-page">
                    <BlogGridS2 />
                </div>
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default BlogPageS2;

