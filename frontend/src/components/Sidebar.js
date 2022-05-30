import React, { useState, useEffect } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/smiley.png'

import "../styles/Sidebar.css"

import { navs } from './NavItems'

import axios from 'axios'

const Sidebar = () => {

    const [sidebarMinimized, setSidebarMinimized] = useState(false);
    const toggleSidebar = () => {
        sidebarMinimized ? setSidebarMinimized(false) : setSidebarMinimized(true);
        // console.log("sidebar toggled to " + sidebarMinimized);
    }

    useEffect(() => {
        axios.get("http://localhost:5000/get_all_uploaded_files")
            .then((response) => {
                navs.map((item) => (
                    item.name === "Files" ? (
                        item.subs = [...response.data.uploaded_files]
                    ) : null
                ))
                // console.log(response.data.uploaded_files);
                // console.log(navs);
            })
    }, []);
    return (
        <div className="Sidebar_body">
            <header className={sidebarMinimized ? "header" : "header Sidebar_body-pd"} id="header">
                <div className="header_toggle"> <i className={sidebarMinimized ? "fa fa-bars" : 'fa fa-close'} id="header-toggle" onClick={toggleSidebar}></i> </div>
                <div className="header_img"> <img src={logo} alt="" /> </div>
            </header>
            <div className={sidebarMinimized ? "l-navbar" : "l-navbar sidebar-show"} id="nav-bar">
                <nav className="nav">
                    <div>
                        <Link to="#" className="nav_logo">
                            <i className='fa fa-bar-chart nav_logo-icon'></i>
                            <span className="nav_logo-name">Grapher</span>
                        </Link>
                        <div className="nav_list">
                            {
                                navs.map((item, id) => (
                                    <div key={id}>
                                        <Link to={item.path} className="nav_link" key={id}>
                                            <i className={'fa ' + item.icon}></i>
                                            <span className="nav_name">
                                                {item.name}
                                                {item.dropdown ? (
                                                    <i className="fa fa-angle-down dropdown-icon"></i>
                                                ) : null}
                                            </span>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Link to="#" className="nav_link">
                        <i className='fa fa-sign-out nav_icon'></i>
                        <span className="nav_name">SignOut</span>
                    </Link>
                </nav>
            </div>
            <div className={sidebarMinimized ? "height-100 bg-light main_content" : "height-100 bg-light main_content content-pd"}>
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar