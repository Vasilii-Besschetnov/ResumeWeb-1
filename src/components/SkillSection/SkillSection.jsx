import React from "react";
import ContentRow from "components/ContentRow/ContentRow.jsx";
import { title as titleCls } from "styles/_layout.scss";
import SectionItem from "components/SectionItem/SectionItem.jsx";

const SkillSection = ({
    title,
    iconCls,
    skills
}) => {
    return (
        "test"
    );
};

SkillSection.defaultProps = {
    skills: Array(3).fill({}) // todo relpace with []
};

export default SkillSection;