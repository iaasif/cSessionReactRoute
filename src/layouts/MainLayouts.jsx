// import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Nav';
import { Outlet } from 'react-router-dom';
const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>

            </div>
            {/* packet */}

            <div className='min-h-[calc(100vh-116px)]'><Outlet></Outlet></div>

            {/* footer  */}

            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;