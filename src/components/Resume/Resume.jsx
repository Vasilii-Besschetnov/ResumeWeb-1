import React from "react";
import { resume, cntMain, cntSkills, cntExp } from "./_resume.scss";
import Header from "components/Header/Header.jsx";
import MaxWidth from "components/MaxWidth/MaxWidth.jsx";
import SectionList from "components/SectionList/SectionList.jsx";
import SkillList from "components/SkillList/SkillList.jsx";

const Resume = () => {
    return (
        <div className={resume}>
            <Header />
            <MaxWidth className={cntMain}>
                
                    <div className={cntExp}>
                        <SectionList />
                    </div>
                    <div className={cntSkills}>
                        <SkillList />
                    </div>
            </MaxWidth>
        </div>
    );
}


export default Resume;