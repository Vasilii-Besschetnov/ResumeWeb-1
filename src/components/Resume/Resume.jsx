import React from "react";
import { resume, cntMain, cntSkills, cntExp } from "./_resume.scss";
import Header from "components/Header/Header.jsx";
import MaxWidth from "components/MaxWidth/MaxWidth.jsx";
import SectionList from "components/SectionList/SectionList.jsx";

const Resume = () => {
    return (
        <div className={resume}>
            <Header />
            <MaxWidth className={cntMain}>
                
                    <div className={cntExp}>
                        <SectionList />
                    </div>
                    <div className={cntSkills}>
                    </div>
            </MaxWidth>
        </div>
    );
}


export default Resume;