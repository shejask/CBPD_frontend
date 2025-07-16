import React from 'react';
import Link from 'next/link'
import blogs from '../../api/blogs.js'
import Image from 'next/image.js';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogGridS2 = (props) => {
    return (
        <section className="blog-section separator-padding">
            <div className="container">
                <div className="blog-items">
                    <div className="row">
                        {blogs.slice(0, 6).map((blog, bl) => (
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

    )

}

export default BlogGridS2;
