import React, { useState, useEffect } from "react";
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
  const [programs, setPrograms] = useState({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://admin.cbpd.co.uk/api/admin/courses/all');
        const courses = await response.json();
        
        // Group courses by category
        const groupedPrograms = courses.reduce((acc, course) => {
          const categoryName = course.categoryId.name;
          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }
          acc[categoryName].push({
            title: course.title,
            id: course._id
          });
          return acc;
        }, {});
        
        setPrograms(groupedPrograms);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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
                      <li>
                        <Link onClick={ClickHandler} href="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/about">
                          About us
                        </Link>
                      </li>
                      <li className="has-submenu">
                        <Link onClick={ClickHandler} href="/programs">
                          Programs
                        </Link>
                        <ul className={`sub-menu ${styles["sub-menu"]} text-left`}>
                          {loading ? (
                            <li>Loading programs...</li>
                          ) : (
                            Object.entries(programs).map(([categoryName, courses]) => (
                              <li key={categoryName} className="has-submenu">
                                <span className="cursor-pointer">
                                  {categoryName}
                                </span>
                                <ul className={`sub-menu ${styles["sub-menu"]}`}>
                                  {courses.map((course) => (
                                    <li key={course.id}>
                                      <span className="cursor-pointer">
                                        {course.title}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))
                          )}
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
                      <Link
                        href="/login"
                        className="btn-style-1 flex items-center gap-2 bg-blue-950 border-blue-950"
                      >
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