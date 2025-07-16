import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar2 from '../../components/Navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogGrid from '../../components/BlogGrid/BlogGrid';
import CtaSection from '../../components/CtaSection/CtaSection.js';

const BlogPage = () => {
    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} Bg={'/images/page-title/bg-4.jpg'} />
                <div className="blog-page">
                    <BlogGrid />
                </div>
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default BlogPage;

