import React from 'react';
import Link from 'next/link'
import blog1 from '/public/images/blog-single/img-1.jpg'
import blog2 from '/public/images/blog-single/img-2.jpg'
import blogs from '../../api/blogs';
import { useRouter } from 'next/router'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'
import Image from 'next/image.js';

const BlogSingle = (props) => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="blog-single-page-area separator-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-md-12 col-12 ${props.blRight}`}>
                        <div className="blog-single-wrap">
                            <div className="blog-single-text">
                                <div className="blog-img">
                                    <Image src={BlogDetails?.blogSingleImg} alt="" />
                                </div>
                                <ul>
                                    <li><strong>By: </strong></li>
                                    <li><i className="icon-05"></i> {BlogDetails?.author}</li>
                                    <li><i className="icon-04"></i> {BlogDetails?.comment} comments</li>
                                </ul>
                                <p>Global Business Head of consultees. Leads the global expansion of the consultees
                                    brand and overseas investment in solutions and innovation. Renowned coder and an
                                    authority on matters of industrial experience, and technological interface.</p>
                            </div>
                            <div className="blog-single-text-wrap">
                                <h2>Strategies for effective data management</h2>
                                <p>It plays a significant role in the global economy and encompasses various aspects of
                                    real estate transactions and operations. The real estate industry is influenced by
                                    economic conditions, population growth, urbanization trends, and government
                                    policies. It is a vital part of the economy, providing housing, commercial spaces,
                                    and infrastructure for communities and businesses , helping individuals and
                                    organizations navigate property transactions and investments.</p>

                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <ul>
                                            <li>1. Improve operational efficiency.</li>
                                            <li>2. Enhance customer experience through digital.</li>
                                            <li>3. Streamline internal processes</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <ul>
                                            <li>1. Improve operational efficiency.</li>
                                            <li>2. Enhance customer experience through digital.</li>
                                            <li>3. Streamline internal processes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <blockquote>
                                “ Global Business Head of consultees. Leads the global expansion of the consultees brand
                                and overseas investment in solutions and innovation. Renowned coder and an authority on
                                matters of industrial experience. ”
                                <span>- Jane Cooper</span>
                            </blockquote>
                            <p>It plays a significant role in the global economy and encompasses various aspects of real
                                estate transactions and operations. The real estate industry is influenced by economic
                                conditions, population growth, urbanization trends, and government policies. It is a
                                vital part of the economy, providing housing, commercial spaces, and infrastructure for
                                communities and businesses , helping individuals and organizations navigate property
                                transactions and investments.</p>
                            <div className="detail-img">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-6">
                                        <Image src={blog1} alt=""/>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-6">
                                        <Image src={blog2} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="tag-share">
                                <h3>Tags :</h3>
                                <ul>
                                    <li><Link href="/blog-single/Unlocking-the-Right-Fit-5-Interview-Tips-for-Spotting">Business</Link></li>
                                    <li><Link href="/blog-single/Unlocking-the-Right-Fit-5-Interview-Tips-for-Spotting">Services</Link></li>
                                    <li><Link href="/blog-single/Unlocking-the-Right-Fit-5-Interview-Tips-for-Spotting">Planning</Link></li>
                                </ul>
                            </div>
                            <div className="comment-respond">
                                <div className="comment-respond-inner">
                                    <h3 className="comment-reply-title">Leave a Reply</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <form className="comment-form" onSubmit={submitHandler}>
                                        <div className="form-textarea">
                                            <label>Comment*</label>
                                            <textarea id="comment" placeholder="Comment here"></textarea>
                                        </div>
                                        <div className="form-inputs">
                                            <div className="form-field">
                                                <label>Name*</label>
                                                <input type="text" placeholder="Name*"/>
                                            </div>
                                            <div className="form-field">
                                                <label>Email*</label>
                                                <input type="email" placeholder="Email*"/>
                                            </div>
                                            <div className="form-field">
                                                <label>Website</label>
                                                <input type="url" placeholder="Website URL"/>
                                            </div>
                                        </div>
                                        <div className="form-submit">
                                            <input id="submit" value="Post Comment" type="submit"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;