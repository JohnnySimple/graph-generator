import React from 'react'
import { Outlet } from 'react-router-dom'

// import components
import Navbar from "./Navbar.js"

const HomeLayout = () => {
    return (
        <div className="HomeLayout">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default HomeLayout