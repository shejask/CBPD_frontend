import React from "react";
import blogs from '../../api/blogs'
import Link  from "next/link";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    return (
        <section className="blog-section separator-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-12">
                        <div className="heading-title-s2">
                            <small>News & Blogs</small>
                            <h2>Read Out Latest Consulting <span>New & Blog</span></h2>
                        </div>
                    </div>
                </div>
                <div className="blog-items">
                    <div className="row">
                        {blogs.slice(0, 2).map((blog, bl) => (
                            <div className="col col-lg-6 col-md-12 col-12" key={bl}>
                                <div className="blog-item">
                                    <div className="blog-img-left">
                                        <div className="blog-img">
                                            <Image src={blog.screens} alt="" />
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <ul>
                                            <li><strong>By: </strong></li>
                                            <li><i className="icon-05"></i> {blog.author}</li>
                                            <li><i className="icon-04"></i> {blog.comment} comments</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="btn-style-2">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;