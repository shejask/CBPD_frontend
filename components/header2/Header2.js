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
    <>
      <style jsx>{`
        .professional-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 900px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15), 
                      0 8px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 2rem;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px) scale(0.95);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 8px;
        }

        .has-submenu:hover .professional-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .category-section {
          position: relative;
        }

        .category-header {
          display: flex;
          align-items: center;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .category-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .category-header:hover::before {
          left: 100%;
        }

        .category-header:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .category-icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .courses-list {
          list-style: none;
          padding: 0;
          margin: 0;
          background: rgba(248, 250, 252, 0.8);
          border-radius: 12px;
          padding: 1rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(226, 232, 240, 0.5);
        }

        .course-item {
          margin-bottom: 0.5rem;
          last-child: {
            margin-bottom: 0;
          }
        }

        .course-link {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          color: #475569;
          text-decoration: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border: 1px solid transparent;
        }

        .course-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
          transition: width 0.3s ease;
          z-index: -1;
        }

        .course-link:hover {
          color: white;
          transform: translateX(8px);
          border-color: rgba(79, 172, 254, 0.3);
          box-shadow: 0 4px 15px rgba(79, 172, 254, 0.2);
        }

        .course-link:hover::before {
          width: 100%;
        }

        .course-icon {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(45deg, #4facfe, #00f2fe);
          margin-right: 12px;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .course-link:hover .course-icon {
          background: white;
          transform: scale(1.2);
        }

        .loading-state {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          color: #64748b;
          font-weight: 500;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #e2e8f0;
          border-top: 2px solid #4facfe;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 12px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .dropdown-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(2px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }

        .has-submenu:hover .dropdown-overlay {
          opacity: 1;
          visibility: visible;
        }

        /* Enhanced responsive design */
        @media (max-width: 1200px) {
          .professional-dropdown {
            min-width: 700px;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            padding: 1.5rem;
          }
        }

        @media (max-width: 992px) {
          .professional-dropdown {
            min-width: 500px;
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem;
          }
        }

        /* Scrollbar styling for long lists */
        .courses-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .courses-list::-webkit-scrollbar {
          width: 4px;
        }

        .courses-list::-webkit-scrollbar-track {
          background: rgba(226, 232, 240, 0.3);
          border-radius: 4px;
        }

        .courses-list::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #4facfe, #00f2fe);
          border-radius: 4px;
        }

        .courses-list::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #00f2fe, #4facfe);
        }
      `}</style>

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
                        <li className="has-submenu" style={{ position: 'relative' }}>
                          <Link onClick={ClickHandler} href="/programs">
                            Programs
                          </Link>
                          
                          <div className="dropdown-overlay"></div>
                          
                          <div className="professional-dropdown">
                            {loading ? (
                              <div className="loading-state">
                                <div className="loading-spinner"></div>
                                Loading programs...
                              </div>
                            ) : (
                              Object.entries(programs).map(([categoryName, courses]) => (
                                <div key={categoryName} className="category-section">
                                  <div className="category-header">
                                    <div className="category-icon">
                                      {categoryName.charAt(0).toUpperCase()}
                                    </div>
                                    {categoryName}
                                  </div>
                                  <ul className="courses-list">
                                    {courses.map((course) => (
                                      <li key={course.id} className="course-item">
                                        <span className="course-link">
                                          <div className="course-icon"></div>
                                          {course.title}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))
                            )}
                          </div>
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
    </>
  );
};

export default Header2;