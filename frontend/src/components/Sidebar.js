import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../assets/images/smiley.png'

import "../styles/Sidebar.css"
import "../test.js"

const Sidebar = () => {

    const [sidebarMinimized, setSidebarMinimized] = useState(false);
    const toggleSidebar = () => {
        sidebarMinimized ? setSidebarMinimized(false) : setSidebarMinimized(true);
        // console.log("sidebar toggled to " + sidebarMinimized);
    }
    return (
        <div className="">
            <header className={sidebarMinimized ? "header" : "header body-pd"} id="header">
                <div className="header_toggle"> <i className={sidebarMinimized ? "fa fa-bars" : 'fa fa-close'} id="header-toggle" onClick={toggleSidebar}></i> </div>
                <div className="header_img"> <img src={logo} alt="" /> </div>
            </header>
            <div className={sidebarMinimized ? "l-navbar" : "l-navbar show"} id="nav-bar">
                <nav className="nav">
                    <div>
                        <a href="#" className="nav_logo">
                            <i className='fa fa-address-book nav_logo-icon'></i>
                            <span className="nav_logo-name">Grapher</span>
                        </a>
                        <div className="nav_list">
                            <a href="#" className="nav_link active">
                                <i className='fa fa-dashboard nav_icon'></i> <span className="nav_name">Dashboard</span>
                            </a>
                            <a href="#" className="nav_link">
                                <i className='fa fa-user nav_icon'></i> <span className="nav_name">Users</span>
                            </a>
                            <a href="#" className="nav_link">
                                <i className='fa fa-bell nav_icon'></i> <span className="nav_name">Messages</span>
                            </a>
                        </div>
                    </div>
                    <a href="#" className="nav_link">
                        <i className='fa fa-sign-out nav_icon'></i>
                        <span className="nav_name">SignOut</span>
                    </a>
                </nav>
            </div>
            <div className={sidebarMinimized ? "height-100 bg-light main_content" : "height-100 bg-light main_content content-pd"}>
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar