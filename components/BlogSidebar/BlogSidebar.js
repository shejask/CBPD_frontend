import React from 'react';
import Link from 'next/link'
import blogs from '../../api/blogs'
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col-lg-4 col-md-8 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Here" />
                            <button type="submit"><i className="icon-23"></i></button>
                        </div>
                    </form>
                </div>
                <div className="recent-post widget">
                    <h3>Recent Posts</h3>
                    {blogs.slice(0, 2).map((blog, bl) => (
                        <div className="post" key={bl}>
                            <div className="post-img">
                                <Image src={blog.screens} alt="" />
                            </div>
                            <div className="post-content">
                                <ul>
                                    <li><strong>By: </strong></li>
                                    <li><i className="icon-05"></i> Admin</li>
                                    <li><i className="icon-04"></i> {blog.comment} comments</li>
                                </ul>
                                <h4><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="category-widget widget">
                    <h3>Category</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog"><i className="icon-16"></i>Business (3)</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog"><i className="icon-16"></i>Advisor (1)</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog"><i className="icon-16"></i>Professional (4)</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog"><i className="icon-16"></i>Finance (1)</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog"><i className="icon-16"></i>Marketing (2)</Link></li>
                    </ul>
                </div>
                <div className="tag-widget widget">
                    <h3>Popular Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog">Business</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog">Services</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog">Planning</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog">Advisor</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog">Professional</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog">Marketing</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
