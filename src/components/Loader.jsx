// import React from 'react';

import { HashLoader } from "react-spinners";

const Loader = () => {
    console.log("object");
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-116px)]'>

            <HashLoader size={100} color="pink" className=""></HashLoader>

        </div>
    );
};

export default Loader;