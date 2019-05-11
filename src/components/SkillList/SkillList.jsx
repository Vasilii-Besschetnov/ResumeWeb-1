import React from "react";
import SkillSection from "components/SkillSection/SkillSection.jsx";
import sections from "data/skills.js";

const SkillList = () => {
    return (
        <div>
            {sections.map(s => {
                return (
                    <SkillSection key={s.title} {...s}/>
                    );
            })}

        </div>
    );
};


SkillList.defaultProps = {
    sections: Array(3).fill({}) // todo relpace with []
};

export default SkillList;
