import React from "react";
import "./_resume.scss";
import Header from "components/Header/Header.jsx";
import MaxWidth from "components/MaxWidth/MaxWidth.jsx";

const Resume = () => {
    return (
        <div className="resume">
            <Header />
            <MaxWidth>            
                here would be a main content           
            </MaxWidth>
        </div>
    );
}


export default Resume;