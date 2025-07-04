import React from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'
import blogs from '../../api/blogs'
import Image from 'next/image.js';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogList = (props) => {
    return (
        <section className="blog-page-area separator-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-md-12 col-12 ${props.blRight}`}>
                        <div className="blog-page-left">
                            {blogs.slice(0, 4).map((blog, bitem) => (
                                <div className="blog-item" key={bitem}>
                                    <div className="blog-img">
                                        <Image src={blog.blogSingleImg} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <ul>
                                            <li><strong>By: </strong></li>
                                            <li><i className="icon-05"></i> {blog.author}</li>
                                            <li><i className="icon-04"></i> {blog.comment} comments</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <p>Global Business Head of consultees. Leads the global expansion of the consultees brand and overseas investment in solutions and innovation. Renowned coder and an authority on matters of industrial experience, and technological interface.</p>
                                        <Link className="btn-style-2" onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>Read More</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>

    )

}

export default BlogList;
