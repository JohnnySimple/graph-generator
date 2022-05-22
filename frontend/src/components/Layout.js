import React from "react";
import { Outlet } from "react-router-dom";

// import components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className="Layout">
            <Sidebar />
        </div>
    );
};

export default Layout;
