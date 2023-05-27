
import React from "react";
// import About from "./Pages/About/Components/About";
import Align from "../Align/Align";
import Aricles from "../Aricles/Aricles";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Discover from "../Discover/Discover";
import Freedom from "../Freedom/Freedom";
import Love from "../Love/Love";
import Power from "../Power/Power";
import Sponsors from "../Sponsors/Sponsors";


const Wrapper = () => {


    return (
        <>
            <Banner />
            <Power />
            <Blog />
            <Discover />
            <Freedom />
            <Sponsors />
            <Love />
            <Align />
            <Aricles />
            {/* <About /> */}
        </>
    );
};
export default Wrapper;