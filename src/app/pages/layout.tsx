import React from "react"; 

import HomePage from "./home"
import { Route , Routes } from "react-router-dom";

const Layout = ()=>{


    return <>
        <div> this is for navigation </div>
        <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<div>About</div>} />
        </Routes>
    </>
}

export default Layout 