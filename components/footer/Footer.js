import React from "react";
import Link from "next/link";
import Services from "../../api/service";
import logo3 from "/public/CBPD_LOGO.png";
import reg from "/public/images/reg no.png";
import ukrlp from "/public/images/footer/ukrlp.jpg";
import aoht from "/public/images/footer/aoht.png";

import paymentsicons from "/public/images/payments-icons.png";

import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};
const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  return (
    <footer className="footer-section">
      <div className="upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget subscribe">
                <div className="logo">
                  <Link className="logo" onClick={ClickHandler} href="/">
                    <Image width={200} src={logo3} alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col-xl-2 offset-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Quick Link</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/programs">
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/partner">
                      Partner
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Contact Info</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    {/* <li>Company -</li> */}
                    <li>
                      Central Board of professional development 37th Floor 1
                      Canada Square London, E14 5DY
                    </li>
                    <li>+44 20 38074300</li>
                    <li>info@cbpd.co.uk</li>
                  </ul>
                  {/* <Image 
                                            src={paymentsicons} 
                                            alt="payments"
                                            width={400}
                                            height={50}
                                            style={{
                                                width: 'auto',
                                                height: 'auto',
                                                maxWidth: '200px'
                                            }}
                                        />  */}
                </div>
              </div>
            </div>

            <div className="col col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <Image
                  src={reg}
                  alt="payments"
                  width={150}
                  height={30}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100px",
                  }}
                />

                <Image
                  src="/images/footer/cpdlogo.png"
                  alt="cpdlogo"
                  width={120}
                  height={10}
                  style={{
                    width: "auto",
                    paddingTop: "11px",
                    height: "auto",
                    maxWidth: "100px",
                  }}
                />

                <Image
                  src="/images/footer/aoht.png"
                  alt="aoht"
                  width={120}
                  height={20}
                  style={{
                    width: "auto",
                    paddingTop: "11px",
                    height: "auto",
                    maxWidth: "100px",
                  }}
                />

                <Image
                  src="/images/footer/ukrlp.jpg"
                  alt="ukrlp"
                  width={150}
                  height={30}
                  style={{
                    width: "auto",
                    paddingTop: "11px",
                    height: "auto",
                    maxWidth: "150px",
                  }}
                />
                <Image
                  src="/images/footer/ico.jpeg"
                  alt="ukrlp"
                  width={150}
                  height={30}
                  style={{
                    width: "auto",
                    paddingTop: "11px",
                    height: "auto",
                    maxWidth: "100px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-4 col-12">
              <div className="lower-footer-link">
                <p className="copyright">
                  {" "}
                  Copyright &copy; 2025{" "}
                  <Link onClick={ClickHandler} href="/home">
                    CBPD.
                  </Link>{" "}
                  All rights reserved.
                </p>
              </div>
            </div>

            <div className="col col-lg-8 col-12">
              <ul className="copy-right">
                <li>
                  {" "}
                  <Image
                    src={paymentsicons}
                    alt="payments"
                    width={200}
                    height={40}
                    style={{ width: "auto", height: "auto", maxWidth: "300px" }}
                  />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
