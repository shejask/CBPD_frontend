import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"; // Fixed: was importing from List instead of ListItem
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [    
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'About us',
        link: '/about',
    },    
    {
        id: 3,
        title: 'Programs',
        link: '/programs',
        submenu: [
            {
                id: 31,
                title: 'Business and Management',
                link: '/programs',
                submenu: [
                    {
                        id: 311,
                        title: 'International Diploma in Hospital Administration',
                        link: '/programs'
                    },
                    {
                        id: 312,
                        title: 'International Diploma in Hotel Management',
                        link: '/programs'
                    },
                    {
                        id: 313,
                        title: 'International Diploma in Corporate Accounts Training',
                        link: '/programs'
                    },
                    {
                        id: 314,
                        title: 'International Diploma in Logistics and Supply Chain Management',
                        link: '/programs'
                    },
                    {
                        id: 315,
                        title: 'International Diploma in Office Administration',
                        link: '/programs'
                    },
                    {
                        id: 316,
                        title: 'International Diploma in Hospital Front Office Administration',
                        link: '/programs'
                    },
                    {
                        id: 317,
                        title: 'Hospitality and Tourism Management',
                        link: '/programs'
                    },
                    {
                        id: 318,
                        title: 'International Diploma in Human Resource Management',
                        link: '/programs'
                    },
                    {
                        id: 319,
                        title: 'Accounting and Finance',
                        link: '/programs'
                    },
                    {
                        id: 320,
                        title: 'Project Management',
                        link: '/programs'
                    },
                    {
                        id: 321,
                        title: 'Procurement and Material Management',
                        link: '/programs'
                    }
                ]
            },            {
                id: 32,
                title: 'Technology and Data',
                link: '/programs',
                submenu: [
                    {
                        id: 322,
                        title: 'Data Science',
                        link: '/programs'
                    },
                    {
                        id: 323,
                        title: 'Artificial Intelligence',
                        link: '/programs'
                    },
                    {
                        id: 324,
                        title: 'Cyber Security',
                        link: '/programs'
                    },
                    {
                        id: 325,
                        title: 'Digital Marketing',
                        link: '/programs'
                    },
                    {
                        id: 326,
                        title: 'Diploma in Mobile Phone Technician',
                        link: '/programs'
                    },
                    {
                        id: 327,
                        title: 'Diploma in AC/Fridge Technician',
                        link: '/programs'
                    }
                ]
            },{
                id: 33,
                title: 'Education and Training',
                link: '/programs',
                submenu: [
                    {
                        id: 331,
                        title: 'International Montessori Teacher Training',
                        link: '/programs'
                    },
                    {
                        id: 332,
                        title: 'Early Childhood Care and Education',
                        link: '/programs'
                    },
                    {
                        id: 333,
                        title: 'Computer Teacher Training Course',
                        link: '/programs'
                    },
                    {
                        id: 334,
                        title: 'Abacus Teacher Training Course',
                        link: '/programs'
                    },
                    {
                        id: 335,
                        title: 'Fashion Designing Course',
                        link: '/programs'
                    },
                    {
                        id: 336,
                        title: 'Bridal Makeup Course',
                        link: '/programs'
                    },
                    {
                        id: 337,
                        title: 'Accounting Course',
                        link: '/programs'
                    },
                    {
                        id: 338,
                        title: 'Tally',
                        link: '/programs'
                    }
                ]
            },
            {
                id: 34,
                title: 'Language and Creative Arts',
                link: '/programs',
                submenu: [
                    {
                        id: 341,
                        title: 'Communicate English Language Studies',
                        link: '/programs'
                    },
                    {
                        id: 342,
                        title: 'Fashion Design',
                        link: '/programs'
                    }
                ]
            },
            {                id: 35,
                title: 'Health and Safety',
                link: '/programs',
                submenu: [
                    {
                        id: 351,
                        title: 'Healthy and Safety Management',
                        link: '/programs'
                    },
                    {
                        id: 352,
                        title: 'Diploma in Medical Lab Technology',
                        link: '/programs'
                    },
                    {
                        id: 353,
                        title: 'Dialysis Assistant',
                        link: '/programs'
                    },
                    {
                        id: 354,
                        title: 'Radiology and imaging Technology',
                        link: '/programs'
                    },
                    {
                        id: 355,
                        title: 'Cardiac Assistant',
                        link: '/programs'
                    },
                    {
                        id: 356,
                        title: 'Nursing Assistant',
                        link: '/programs'
                    },
                    {
                        id: 357,
                        title: 'Operation Theatre Assistant',
                        link: '/programs'
                    },
                    {
                        id: 358,
                        title: 'International Diploma in Oil and Gas',
                        link: '/programs'
                    },
                    {
                        id: 359,
                        title: 'Acupuncture Course',
                        link: '/programs'
                    },
                    {
                        id: 360,
                        title: 'Diploma in Optometry',
                        link: '/programs'
                    },
                    {
                        id: 361,
                        title: 'Diploma in Hospital Administration',
                        link: '/programs'
                    },
                    {
                        id: 362,
                        title: 'Diploma in Business Management',
                        link: '/programs'
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        title: 'Become a Partner',
        link: '/partner',
    },
    {
        id: 9,
        title: 'Verify Certificate',
        link: '/Verifications',
    },
    {
        id: 8,
        title: 'Contact',
        link: '/contact',
    }
]

const MobileMenu = () => {
    const [openId, setOpenId] = useState(0);
    const [subOpenId, setSubOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="close" onClick={() => setMenuState(!menuActive)}>
                        <i className="icon-02"></i>
                    </div>
                </div>
                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <li key={mn} className={item.id === openId ? 'active' : null}>
                                {item.submenu ? (
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                                            {item.title}
                                            <i className={item.id === openId ? 'ti-minus' : 'ti-plus'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <ul className="submenu">
                                                {item.submenu.map((submenu, i) => {
                                                    return (
                                                        <li key={i} className="submenu-item">
                                                            {submenu.submenu ? (
                                                                <div className="nested-submenu">
                                                                    <p onClick={() => setSubOpenId(submenu.id === subOpenId ? 0 : submenu.id)}>
                                                                        {submenu.title}
                                                                        <i className={submenu.id === subOpenId ? 'ti-minus' : 'ti-plus'}></i>
                                                                    </p>
                                                                    <Collapse in={submenu.id === subOpenId} timeout="auto" unmountOnExit>
                                                                        <ul className="submenu">
                                                                            {submenu.submenu.map((subSubmenu, j) => (
                                                                                <li key={j} className="submenu-item">
                                                                                    <Link 
                                                                                        onClick={ClickHandler} 
                                                                                        className="submenu-link"
                                                                                        href={subSubmenu.link}
                                                                                    >
                                                                                        {subSubmenu.title}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </Collapse>
                                                                </div>
                                                            ) : (
                                                                <Link 
                                                                    onClick={ClickHandler} 
                                                                    className="submenu-link"
                                                                    href={submenu.link}
                                                                >
                                                                    {submenu.title}
                                                                </Link>
                                                            )}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </Collapse>
                                    </Fragment>
                                ) : (
                                    <Link 
                                        onClick={ClickHandler}
                                        className="menu-link"
                                        href={item.link}
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;