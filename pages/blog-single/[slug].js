import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Footer from '../../components/footer/Footer';


const BlogDetails = () => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar2 hclass={'header-style-2'} />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} Bg={'/images/page-title/bg-1.jpg'} />
            <BlogSingle />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;