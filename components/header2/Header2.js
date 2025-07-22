import React, { useState } from "react";
import Link from "next/link";
import logo from "/public/images/logo.svg";
import logo2 from "/public/CBPD_LOGO.png";
import MobileMenu from "../MobileMenu/MobileMenu";
import HeaderTopbar from "../HeaderTopbar/HeaderTopbar";
import Image from "next/image";
import styles from "./Header2.module.css";
import { useRouter } from "next/router";

const Header2 = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className={`header-area ${props.hclass}`}>
      <div id="header-sticky" className="menu-area">
        <div className="container-fluid">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-md-7 col-5">
                <div className="logo">
                  <Link className="logo" onClick={ClickHandler} href="/">
                    <Image width={200} src={logo2} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-1 col-1 text-right text-xl-right d-none d-lg-block">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul className="nav">
                      {" "}
                      <li>
                        <Link onClick={ClickHandler} href="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/about">
                          About us
                        </Link>
                      </li>{" "}
                      <li className="has-submenu">
                        {" "}
                        <Link onClick={ClickHandler} href="/programs">
                          Programs
                        </Link>
                        <ul className={`sub-menu ${styles["sub-menu"]} text-left`}>
                          <li className="has-submenu">
                            <Link onClick={ClickHandler} href="/programs">
                              Business and Management
                            </Link>
                            <ul className={`sub-menu ${styles["sub-menu"]}`}>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  International Diploma in Hospital
                                  Administration
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  International Diploma in Hotel Management
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  International Diploma in Corporate Accounts
                                  Training
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  International Diploma in Logistics and Supply
                                  Chain Management
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  International Diploma in Office Administration
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  International Diploma in Hospital Front Office
                                  Administration
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Hospitality and Tourism Management
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  International Diploma in Human Resource
                                  Management
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Accounting and Finance
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Project Management
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs ">
                                  Procurement and Material Management
                                </Link>
                              </li>
                            </ul>
                          </li>{" "}
                          <li className="has-submenu">
                            {" "}
                            <Link onClick={ClickHandler} href="/programs">
                              Technology and Data
                            </Link>
                            <ul className={`sub-menu ${styles["sub-menu"]}`}>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Data Science
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Artificial Intelligence
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Cyber Security
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Digital Marketing
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Diploma in Mobile Phone Technician
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Diploma in AC/Fridge Technician
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-submenu">
                            {" "}
                            <Link onClick={ClickHandler} href="/programs">
                              Education and Training
                            </Link>
                            <ul className={`sub-menu ${styles["sub-menu"]}`}>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  International Montessori Teacher Training
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Early Childhood Care and Education
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Computer Teacher Training Course
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Abacus Teacher Training Course
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Fashion Designing Course
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Bridal Makeup Course
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Accounting Course
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Tally
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-submenu">
                            <Link onClick={ClickHandler} href="/programs ">
                              Language and Creative Arts
                            </Link>
                            <ul className={`sub-menu ${styles["sub-menu"]}`}>
                              <li>
                                <Link onClick={ClickHandler} href="/programs ">
                                  Communicate English Language Studies
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs ">
                                  Fashion Design
                                </Link>
                              </li>
                            </ul>
                          </li>{" "}
                          <li className="has-submenu">
                            {" "}
                            <Link onClick={ClickHandler} href="/programs ">
                              Health and Safety
                            </Link>
                            <ul className={`sub-menu ${styles["sub-menu"]}`}>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Healthy and Safety Management
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Diploma in Medical Lab Technology
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Dialysis Assistant
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Radiology and imaging Technology
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Cardiac Assistant
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Nursing Assistant
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Operation Theatre Assistant
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  International Diploma in Oil and Gas
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Acupuncture Course
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Diploma in Optometry
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Diploma in Hospital Administration
                                </Link>
                              </li>
                              <li>
                                <Link onClick={ClickHandler} href="/programs">
                                  Diploma in Business Management
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/partner">
                          Become a Partner
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-5 text-left">
                <div className="header-area-right">
                  <ul className=" flex items-center gap-3">
                    {/* <li><button className="search-toggle-btn"><i className="icon-23" onClick={() => setMenuState(!menuActive)}></i></button></li> */}
                    <li className="header-right-btn">
                      <Link
                        onClick={ClickHandler}
                        href="/Verifications"
                        className="btn-style-1"
                      >
                        Verifications
                      </Link>
                    </li>
                    <li className=" header-right-btn">
                      <Link href="/login" className="btn-style-1 flex items-center gap-2 bg-blue-950 border-blue-950">
                        Register/Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-1">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`header-search-form ${menuActive ? "active" : ""}`}>
        <button
          className="close-header-search"
          onClick={() => setMenuState(!menuActive)}
        >
          <i className="icon-02"></i>
        </button>
        <form method="post" onSubmit={SubmitHandler}>
          {" "}
          <div className="form-group">
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search Here"
              required=""
            />
            <button type="submit" className="search-btn">
              <i className="icon-23"></i>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header2;
