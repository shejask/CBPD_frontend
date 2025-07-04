import React from "react";
import blogs from '../../api/blogs'
import Link  from "next/link";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSectionS2 = () => {
    return (
        <section className="blog-section-s2 separator-padding">
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
                        {blogs.slice(0, 3).map((blog, bl) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                                <div className="blog-item">
                                    <div className="blog-content">
                                        <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}.</Link></h2>
                                        <div className="blog-flip-box">
                                            <div className="blog-flip-box-inner">
                                                <div className="blog-flip-box-front">
                                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci
                                                        consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec
                                                        odio orci. Nunc id massa ante.</p>
                                                </div>
                                                <div className="blog-flip-box-back">
                                                    <Image src={blog.blImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="btn-style-2">Read More</Link>
                                        <ul>
                                            <li><strong>By: </strong></li>
                                            <li><i className="icon-05"></i> {blog.author}</li>
                                            <li><i className="icon-04"></i> {blog.comment} comments</li>
                                        </ul>
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

export default BlogSectionS2;